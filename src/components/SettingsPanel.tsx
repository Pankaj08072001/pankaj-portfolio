import { Check, Terminal, Maximize, Download, Palette, Keyboard, Zap } from "lucide-react";

export type ThemeName = "Default Dark" | "Rosé Pine" | "Tokyo Night" | "Catppuccin" | "Nord" | "Gruvbox";

export interface Theme {
  name: ThemeName;
  dot: string;
  bg: string;
  sidebar: string;
  tabBar: string;
  tabInactive: string;
  activityBar: string;
  titleBar: string;
  menuBar: string;
  border: string;
  accent: string;
  statusBar: string;
  text: string;
  textMuted: string;
  hover: string;
}

export const THEMES: Theme[] = [
  { name: "Default Dark", dot: "#569cd6", bg: "#1e1e1e", sidebar: "#252526", tabBar: "#252526", tabInactive: "#2d2d2d", activityBar: "#333333", titleBar: "#323233", menuBar: "#3c3c3c", border: "#2d2d2d", accent: "#007acc", statusBar: "#007acc", text: "#cccccc", textMuted: "#858585", hover: "#2a2d2e" },
  { name: "Rosé Pine",    dot: "#eb6f92", bg: "#191724", sidebar: "#1f1d2e", tabBar: "#1f1d2e", tabInactive: "#26233a", activityBar: "#2a2837", titleBar: "#21202e", menuBar: "#26233a", border: "#403d52", accent: "#eb6f92", statusBar: "#524f67", text: "#e0def4", textMuted: "#6e6a86", hover: "#26233a" },
  { name: "Tokyo Night",  dot: "#7aa2f7", bg: "#1a1b26", sidebar: "#16161e", tabBar: "#16161e", tabInactive: "#1e2030", activityBar: "#1e2030", titleBar: "#16161e", menuBar: "#1e2030", border: "#2f3549", accent: "#7aa2f7", statusBar: "#3d59a1", text: "#c0caf5", textMuted: "#565f89", hover: "#1e2030" },
  { name: "Catppuccin",   dot: "#cba6f7", bg: "#1e1e2e", sidebar: "#181825", tabBar: "#181825", tabInactive: "#1e1e2e", activityBar: "#181825", titleBar: "#11111b", menuBar: "#1e1e2e", border: "#313244", accent: "#cba6f7", statusBar: "#6c7086", text: "#cdd6f4", textMuted: "#6c7086", hover: "#313244" },
  { name: "Nord",         dot: "#88c0d0", bg: "#2e3440", sidebar: "#3b4252", tabBar: "#3b4252", tabInactive: "#434c5e", activityBar: "#2e3440", titleBar: "#2e3440", menuBar: "#3b4252", border: "#4c566a", accent: "#88c0d0", statusBar: "#5e81ac", text: "#d8dee9", textMuted: "#616e88", hover: "#434c5e" },
  { name: "Gruvbox",      dot: "#d79921", bg: "#282828", sidebar: "#3c3836", tabBar: "#3c3836", tabInactive: "#504945", activityBar: "#32302f", titleBar: "#1d2021", menuBar: "#3c3836", border: "#504945", accent: "#fe8019", statusBar: "#d79921", text: "#ebdbb2", textMuted: "#928374", hover: "#504945" },
];

interface SettingsPanelProps {
  currentTheme: ThemeName;
  onThemeChange: (theme: ThemeName) => void;
  onToggleTerminal: () => void;
  onClose: () => void;
  theme: Theme;
}

export function SettingsPanel({ currentTheme, onThemeChange, onToggleTerminal, onClose, theme }: SettingsPanelProps) {
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
  };

  return (
    <div className="w-64 flex flex-col overflow-y-auto shrink-0 select-none border-r" style={{ backgroundColor: theme.sidebar, borderColor: theme.border }}>
      <div className="px-4 py-2 text-[11px] font-semibold tracking-widest uppercase border-b" style={{ color: theme.textMuted, borderColor: theme.border }}>
        Settings
      </div>

      <div className="px-4 pt-3 pb-1">
        <div className="flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase mb-2" style={{ color: theme.textMuted }}>
          <Palette className="w-3 h-3" /> Color Theme
        </div>
        <div className="flex flex-col gap-0.5">
          {THEMES.map((t) => (
            <button
              key={t.name}
              onClick={() => onThemeChange(t.name)}
              className="flex items-center gap-2.5 px-2 py-1.5 rounded text-[13px] w-full text-left transition-colors"
              style={{ color: theme.text, backgroundColor: currentTheme === t.name ? theme.hover : "transparent" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.hover)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = currentTheme === t.name ? theme.hover : "transparent")}
            >
              <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: t.dot }} />
              <span className="flex-1">{t.name}</span>
              {currentTheme === t.name && <Check className="w-3.5 h-3.5" style={{ color: theme.accent }} />}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t mx-3 my-2" style={{ borderColor: theme.border }} />

      <div className="px-4 pb-1">
        <div className="flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase mb-2" style={{ color: theme.textMuted }}>
          <Zap className="w-3 h-3" /> Quick Actions
        </div>
        <div className="flex flex-col gap-0.5">
          {[
            { icon: Terminal, label: "Toggle Terminal", shortcut: "Ctrl+`", action: () => { onToggleTerminal(); onClose(); } },
            { icon: Maximize, label: "Toggle Fullscreen", shortcut: "F11", action: handleToggleFullscreen },
            { icon: Download, label: "Download Resume", shortcut: "", action: () => {} },
          ].map(({ icon: Icon, label, shortcut, action }) => (
            <button
              key={label}
              onClick={action}
              className="flex items-center justify-between px-2 py-1.5 rounded text-[13px] w-full text-left transition-colors"
              style={{ color: theme.text }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.hover)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <div className="flex items-center gap-2">
                <Icon className="w-3.5 h-3.5" style={{ color: theme.textMuted }} />
                <span>{label}</span>
              </div>
              {shortcut && <span className="text-[10px] font-mono" style={{ color: theme.textMuted }}>{shortcut}</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t mx-3 my-2" style={{ borderColor: theme.border }} />

      <div className="px-4 pb-3">
        <div className="flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase mb-2" style={{ color: theme.textMuted }}>
          <Keyboard className="w-3 h-3" /> Keyboard Shortcuts
        </div>
        {[["Toggle Terminal", "Ctrl+`"], ["Fullscreen", "F11"], ["Toggle Sidebar", "Ctrl+B"]].map(([action, key]) => (
          <div key={key} className="flex items-center justify-between px-2 py-1">
            <span className="text-[12px]" style={{ color: theme.text }}>{action}</span>
            <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono" style={{ backgroundColor: theme.hover, color: theme.text }}>{key}</kbd>
          </div>
        ))}
      </div>
    </div>
  );
}
