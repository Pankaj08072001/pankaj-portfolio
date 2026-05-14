export function ContactFile() {
  const code = `{
  "name": "Pankaj Chaudhary",
  "role": "Android Developer",
  "contact": {
    "email": "pankaj@example.com",
    "github": "github.com/pankajchaudhary",
    "linkedin": "linkedin.com/in/pankajchaudhary"
  },
  "status": "Available for opportunities",
  "timezone": "IST (UTC+5:30)"
}`;

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
          // Naive JSON highlighting
          let highlighted = line;
          
          if (line.includes('": "')) {
            highlighted = line
              .replace(/"([^"]+)":/g, '<span class="token-json-key">"$1"</span>:')
              .replace(/: "([^"]+)"/g, ': <span class="token-json-string">"$1"</span>');
          } else if (line.includes('": {')) {
             highlighted = line.replace(/"([^"]+)":/g, '<span class="token-json-key">"$1"</span>:');
          }
          
          return (
            <div 
              key={i} 
              dangerouslySetInnerHTML={{ __html: highlighted || ' ' }}
              style={{ minHeight: '1.5em' }}
            />
          );
        })}
      </div>
    </div>
  );
}
