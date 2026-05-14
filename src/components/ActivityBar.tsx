import { Files, Search, GitBranch, Settings, UserCircle, Puzzle } from "lucide-react";
import type { Theme } from "./SettingsPanel";

export type PanelType = "explorer" | "search" | "extensions" | "profile" | "settings" | null;

interface ActivityBarProps {
  activePanel: PanelType;
  setActivePanel: (panel: PanelType) => void;
  theme: Theme;
}

const TOP_BUTTONS: { id: PanelType; Icon: React.ElementType; title: string }[] = [
  { id: "explorer",   Icon: Files,       title: "Explorer (Ctrl+Shift+E)" },
  { id: "search",     Icon: Search,      title: "Search (Ctrl+Shift+F)" },
  { id: "extensions", Icon: Puzzle,      title: "Extensions (Ctrl+Shift+X)" },
  { id: null,         Icon: GitBranch,   title: "Source Control" },
];

const BOTTOM_BUTTONS: { id: PanelType; Icon: React.ElementType; title: string }[] = [
  { id: "profile",  Icon: UserCircle, title: "Profile" },
  { id: "settings", Icon: Settings,   title: "Settings" },
];

export function ActivityBar({ activePanel, setActivePanel, theme }: ActivityBarProps) {
  const handleClick = (id: PanelType) => {
    setActivePanel(activePanel === id ? null : id);
  };

  const btn = (id: PanelType, Icon: React.ElementType, title: string) => {
    const isActive = activePanel === id;
    return (
      <button
        key={title}
        onClick={() => handleClick(id)}
        title={title}
        className="relative w-10 h-10 flex items-center justify-center rounded-sm transition-colors"
        style={{ color: isActive ? theme.text : theme.textMuted }}
        onMouseEnter={(e) => (e.currentTarget.style.color = theme.text)}
        onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? theme.text : theme.textMuted)}
      >
        {isActive && (
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 rounded-r" style={{ backgroundColor: theme.text }} />
        )}
        <Icon className="w-6 h-6" />
      </button>
    );
  };

  return (
    <div className="w-12 flex flex-col items-center py-2 shrink-0 border-r z-10 justify-between" style={{ backgroundColor: theme.activityBar, borderColor: theme.border }}>
      <div className="flex flex-col gap-1">
        {TOP_BUTTONS.map(({ id, Icon, title }) => btn(id, Icon, title))}
      </div>
      <div className="flex flex-col gap-1 mb-2">
        {BOTTOM_BUTTONS.map(({ id, Icon, title }) => btn(id, Icon, title))}
      </div>
    </div>
  );
}
