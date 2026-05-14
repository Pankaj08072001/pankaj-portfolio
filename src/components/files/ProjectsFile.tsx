export function ProjectsFile() {
  return (
    <div className="max-w-3xl font-sans text-vscode-text pb-20">
      <h1 className="text-4xl font-bold mb-8 pb-2 border-b border-[#333] text-white"># Featured Projects</h1>
      
      <div className="space-y-12">
        <Project 
          title="DevTools Pro"
          description="A comprehensive suite of developer tools packed into a single Android application. Includes JSON formatter, API tester, and layout inspector."
          tags={["Kotlin", "Jetpack Compose", "Coroutines"]}
        />
        
        <Project 
          title="SystemMonitor X"
          description="Real-time system monitoring app tracking CPU, RAM, and network usage. Uses background services and notifications to alert users of high usage."
          tags={["Java", "Android SDK", "Room DB"]}
        />
        
        <Project 
          title="APK Analyzer"
          description="Deep dive into installed applications. View manifest details, extract resources, and analyze app permissions right from your phone."
          tags={["Kotlin", "MVVM", "Retrofit"]}
        />
        
        <Project 
          title="Shell Commander"
          description="Execute shell commands with an intuitive UI. Save scripts, run them in the background, and share outputs seamlessly."
          tags={["Kotlin", "Clean Architecture", "Shell"]}
        />
        
        <Project 
          title="File Vault"
          description="Secure file storage using AES-256 encryption. Hidden from gallery and file explorers until unlocked with biometric authentication."
          tags={["Java", "Biometrics", "Security"]}
        />
      </div>
    </div>
  );
}

function Project({ title, description, tags }: { title: string, description: string, tags: string[] }) {
  return (
    <div className="group">
      <h2 className="text-2xl font-semibold mb-3 text-[#569cd6] group-hover:text-[#4fc1ff] transition-colors flex items-center gap-2">
        ## {title}
      </h2>
      <p className="text-gray-300 leading-relaxed mb-4 text-base">
        {description}
      </p>
      <div className="flex gap-2 flex-wrap">
        {tags.map(tag => (
          <span key={tag} className="px-2.5 py-1 bg-[#2d2d2d] text-[#ce9178] rounded text-xs font-mono border border-[#3c3c3c]">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
