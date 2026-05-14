import { useState } from "react";
import { Search, FileCode2, FileJson, FileText } from "lucide-react";
import type { Theme } from "./SettingsPanel";

const CONTENT: { file: string; icon: JSX.Element; lines: string[] }[] = [
  { file: "about.kt",      icon: <FileCode2 className="w-4 h-4" style={{ color: "#a97bff" }} />, lines: ["class Developer {", 'val name = "Pankaj Chaudhary"', 'val role = "Android Developer"', "fun sayHello() {"] },
  { file: "skills.xml",    icon: <FileCode2 className="w-4 h-4" style={{ color: "#569cd6" }} />, lines: ['<skill name="Kotlin" />', '<skill name="Jetpack Compose" />', '<skill name="Android SDK" />', '<skill name="MVVM" />'] },
  { file: "projects.md",   icon: <FileText   className="w-4 h-4" style={{ color: "#42b883" }} />, lines: ["## DevTools Pro", "## SystemMonitor X", "## APK Analyzer", "## Shell Commander"] },
  { file: "contact.json",  icon: <FileJson   className="w-4 h-4" style={{ color: "#cbcb41" }} />, lines: ['"email": "pankaj@example.com"', '"github": "pankajchaudhary"', '"linkedin": "pankajchaudhary"'] },
];

interface SearchPanelProps { theme: Theme; }

export function SearchPanel({ theme }: SearchPanelProps) {
  const [query, setQuery] = useState("");

  const results = query.trim()
    ? CONTENT.flatMap((f) =>
        f.lines
          .filter((l) => l.toLowerCase().includes(query.toLowerCase()))
          .map((l) => ({ file: f.file, icon: f.icon, line: l }))
      )
    : [];

  const highlight = (text: string) => {
    if (!query) return text;
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <mark style={{ backgroundColor: theme.accent + "44", color: theme.accent }}>{text.slice(idx, idx + query.length)}</mark>
        {text.slice(idx + query.length)}
      </>
    );
  };

  return (
    <div className="w-64 flex flex-col overflow-hidden shrink-0 border-r" style={{ backgroundColor: theme.sidebar, borderColor: theme.border }}>
      <div className="px-4 py-2 text-[11px] font-semibold tracking-widest uppercase border-b" style={{ color: theme.textMuted, borderColor: theme.border }}>
        Search
      </div>

      <div className="px-3 py-2">
        <div className="flex items-center gap-2 rounded px-2 py-1 border text-[13px]" style={{ backgroundColor: theme.bg, borderColor: theme.border }}>
          <Search className="w-3.5 h-3.5 shrink-0" style={{ color: theme.textMuted }} />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="flex-1 bg-transparent outline-none text-[13px]"
            style={{ color: theme.text }}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {query && results.length === 0 && (
          <p className="px-4 py-3 text-[12px]" style={{ color: theme.textMuted }}>No results for "{query}"</p>
        )}
        {results.map((r, i) => (
          <div key={i} className="px-3 py-1 cursor-pointer" onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.hover)} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}>
            <div className="flex items-center gap-1.5 text-[11px] mb-0.5" style={{ color: theme.textMuted }}>
              {r.icon}
              <span>{r.file}</span>
            </div>
            <div className="text-[12px] font-mono pl-5 truncate" style={{ color: theme.text }}>{highlight(r.line)}</div>
          </div>
        ))}
        {!query && (
          <p className="px-4 py-3 text-[12px]" style={{ color: theme.textMuted }}>Type to search across files.</p>
        )}
      </div>
    </div>
  );
}
