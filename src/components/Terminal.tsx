import { useState, useRef, useEffect } from "react";
import { X, Minus, ChevronDown } from "lucide-react";
import type { Theme } from "./SettingsPanel";

interface TerminalProps { onClose: () => void; theme: Theme; }
type OutputLine = { type: "input" | "output" | "error" | "success"; text: string };

const COMMANDS: Record<string, OutputLine[]> = {
  help:     [{ type: "output", text: "Available commands:" }, { type: "output", text: "  about · skills · projects · contact · clear" }],
  about:    [{ type: "success", text: "Pankaj Chaudhary — Android Developer" }, { type: "output", text: "Building powerful Android tools & apps." }],
  skills:   [{ type: "success", text: "Skills:" }, { type: "output", text: "  Kotlin, Java, Android SDK, Jetpack Compose" }, { type: "output", text: "  MVVM, Room DB, Retrofit, Coroutines, Git" }],
  projects: [{ type: "success", text: "Projects:" }, { type: "output", text: "  DevTools Pro · SystemMonitor X · APK Analyzer" }, { type: "output", text: "  Shell Commander · File Vault" }],
  contact:  [{ type: "success", text: "Contact:" }, { type: "output", text: "  Email   : pankaj@example.com" }, { type: "output", text: "  GitHub  : github.com/pankajchaudhary" }, { type: "output", text: "  LinkedIn: linkedin.com/in/pankajchaudhary" }],
};

export function Terminal({ onClose, theme }: TerminalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<OutputLine[]>([
    { type: "success", text: "Welcome to Pankaj's Terminal  v1.0.0" },
    { type: "output", text: 'Type "help" to see available commands.' },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [history]);
  useEffect(() => { inputRef.current?.focus(); }, []);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (trimmed === "clear") { setHistory([]); setInput(""); return; }
    const lines: OutputLine[] = [{ type: "input", text: `> ${cmd || ""}` }];
    if (trimmed && COMMANDS[trimmed]) lines.push(...COMMANDS[trimmed]);
    else if (trimmed) lines.push({ type: "error", text: `command not found: ${trimmed}. Try "help".` });
    setHistory((h) => [...h, ...lines]);
    setInput("");
  };

  return (
    <div className="h-48 flex flex-col shrink-0 border-t" style={{ backgroundColor: theme.bg, borderColor: theme.border }}>
      <div className="h-8 flex items-center justify-between px-3 border-b shrink-0" style={{ backgroundColor: theme.sidebar, borderColor: theme.border }}>
        <div className="flex items-center gap-1">
          {["TERMINAL", "PROBLEMS", "OUTPUT"].map((tab, i) => (
            <button key={tab} className="px-3 py-0.5 text-xs transition-colors"
              style={{ color: i === 0 ? theme.text : theme.textMuted, borderTop: i === 0 ? `1px solid ${theme.accent}` : "1px solid transparent", backgroundColor: i === 0 ? theme.bg : "transparent" }}>
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <button className="p-1 rounded hover:opacity-80" style={{ color: theme.textMuted }} title="Minimize"><Minus className="w-3.5 h-3.5" /></button>
          <button className="p-1 rounded hover:opacity-80" style={{ color: theme.textMuted }} title="Maximize"><ChevronDown className="w-3.5 h-3.5" /></button>
          <button onClick={onClose} className="p-1 rounded hover:opacity-80" style={{ color: theme.textMuted }} title="Close"><X className="w-3.5 h-3.5" /></button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-2 font-mono text-[13px] cursor-text" onClick={() => inputRef.current?.focus()}>
        {history.map((line, i) => (
          <div key={i} style={{ color: line.type === "success" ? "#4ec9b0" : line.type === "error" ? "#f44747" : line.type === "input" ? theme.text : theme.accent }}>
            {line.text}
          </div>
        ))}
        <div className="flex items-center gap-2">
          <span style={{ color: "#4ec9b0" }}>pankaj@portfolio</span>
          <span style={{ color: theme.textMuted }}>~$</span>
          <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") handleCommand(input); }}
            className="flex-1 bg-transparent outline-none caret-white" style={{ color: theme.text }}
            spellCheck={false} autoComplete="off" />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
