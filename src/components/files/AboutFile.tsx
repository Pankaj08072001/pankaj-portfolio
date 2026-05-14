export function AboutFile() {
  const code = `package com.pankaj.portfolio

/**
 * Hi, I'm Pankaj Chaudhary.
 * I am a passionate Android Developer dedicated to building
 * robust, scalable, and beautiful Android applications.
 * 
 * With deep expertise in the Android ecosystem, I focus on
 * delivering seamless user experiences.
 */
class Developer {
    val name = "Pankaj Chaudhary"
    val role = "Android Developer"
    val focus = listOf(
        "UI/UX Excellence",
        "App Architecture",
        "Performance Optimization"
    )

    fun sayHello() {
        println("Welcome to my digital workspace!")
    }
}
`;

  const lines = code.split('\n');

  return (
    <div className="flex">
      <div className="flex flex-col text-vscode-line-number text-right pr-4 mr-4 border-r border-[#2d2d2d] select-none opacity-50 shrink-0">
        {lines.map((_, i) => (
          <span key={i} className="min-w-[20px]">{i + 1}</span>
        ))}
      </div>
      <div className="whitespace-pre overflow-x-auto w-full">
        {lines.map((line, i) => {
          if (line.startsWith('/**') || line.startsWith(' *')) {
            return <div key={i} className="token-comment">{line}</div>;
          }
          if (line.startsWith('package')) {
            return (
              <div key={i}>
                <span className="token-keyword">package</span> {line.replace('package ', '')}
              </div>
            );
          }
          if (line.includes('class')) {
            return (
              <div key={i}>
                <span className="token-keyword">class</span> Developer {'{'}
              </div>
            );
          }
          if (line.includes('val')) {
            const parts = line.split('=');
            return (
              <div key={i}>
                <span className="token-keyword ml-4">val</span> {parts[0].replace('    val ', '')} <span className="token-keyword">=</span> {parts[1].includes('"') ? <span className="token-string">{parts[1]}</span> : <span className="token-keyword">{parts[1]}</span>}
              </div>
            );
          }
          if (line.includes('fun')) {
            return (
              <div key={i}>
                <span className="token-keyword ml-4">fun</span> sayHello() {'{'}
              </div>
            );
          }
          if (line.includes('println')) {
            return (
              <div key={i}>
                <span className="ml-8">println</span>(<span className="token-string">"Welcome to my digital workspace!"</span>)
              </div>
            );
          }
          if (line.includes('}')) {
            return <div key={i}>{line}</div>;
          }
          if (line.includes('"')) {
             return <div key={i} className="token-string">{line}</div>;
          }
          return <div key={i}>{line}</div>;
        })}
      </div>
    </div>
  );
}
