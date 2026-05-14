import { GitBranch, CheckCheck, Terminal } from "lucide-react";
import type { ThemeName } from "./SettingsPanel";

interface StatusBarProps {
  onToggleTerminal: () => void;
  terminalOpen: boolean;
  currentTheme: ThemeName;
  accentColor: string;
}

export function StatusBar({ onToggleTerminal, terminalOpen, currentTheme, accentColor }: StatusBarProps) {
  return (
    <div
      className="h-6 text-white text-[11px] flex items-center justify-between px-2 shrink-0 select-none transition-colors duration-300"
      style={{ backgroundColor: accentColor }}
    >
      <div className="flex items-center gap-1">
        <button className="flex items-center gap-1 hover:bg-white/20 px-2 py-0.5 rounded cursor-pointer">
          <GitBranch className="w-3 h-3" />
          <span>main</span>
        </button>
        <button className="flex items-center gap-1 hover:bg-white/20 px-2 py-0.5 rounded cursor-pointer">
          <CheckCheck className="w-3 h-3" />
          <span>0 errors</span>
        </button>
      </div>

      <div className="flex items-center gap-3">
        <span>Ln 1, Col 1</span>
        <span>UTF-8</span>
        <span>Prettier</span>
        <span>Kotlin</span>
        <span className="font-medium">{currentTheme}</span>
        <button
          onClick={onToggleTerminal}
          className={`flex items-center gap-1 hover:bg-white/20 px-2 py-0.5 rounded cursor-pointer ${terminalOpen ? "bg-white/20" : ""}`}
          title="Toggle Terminal"
        >
          <Terminal className="w-3 h-3" />
          <span>Terminal</span>
        </button>
      </div>
    </div>
  );
}
