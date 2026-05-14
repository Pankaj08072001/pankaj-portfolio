import { useState, useRef, useEffect } from "react";
import type { Theme } from "./SettingsPanel";

interface MenuBarProps {
  onToggleTerminal: () => void;
  onToggleSidebar: () => void;
  theme: Theme;
}

type MenuName = "File" | "Edit" | "View" | "Terminal" | "Help" | null;

export function MenuBar({ onToggleTerminal, onToggleSidebar, theme }: MenuBarProps) {
  const [openMenu, setOpenMenu] = useState<MenuName>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const menus: { name: MenuName; items: { label: string; shortcut?: string; action?: () => void; divider?: boolean }[] }[] = [
    { name: "File", items: [{ label: "New File", shortcut: "Ctrl+N" }, { label: "Open...", shortcut: "Ctrl+O" }, { label: "_", divider: true }, { label: "Save", shortcut: "Ctrl+S" }, { label: "_2", divider: true }, { label: "Close Editor", shortcut: "Ctrl+W" }] },
    { name: "Edit", items: [{ label: "Undo", shortcut: "Ctrl+Z" }, { label: "Redo", shortcut: "Ctrl+Y" }, { label: "_", divider: true }, { label: "Find", shortcut: "Ctrl+F" }, { label: "Replace", shortcut: "Ctrl+H" }] },
    { name: "View", items: [{ label: "Explorer", shortcut: "Ctrl+Shift+E", action: onToggleSidebar }, { label: "Toggle Sidebar", shortcut: "Ctrl+B", action: onToggleSidebar }, { label: "_", divider: true }, { label: "Toggle Terminal", shortcut: "Ctrl+`", action: onToggleTerminal }] },
    { name: "Terminal", items: [{ label: "New Terminal", shortcut: "Ctrl+Shift+`", action: onToggleTerminal }, { label: "Toggle Terminal", shortcut: "Ctrl+`", action: onToggleTerminal }] },
    { name: "Help", items: [{ label: "About Pankaj" }, { label: "_", divider: true }, { label: "View on GitHub" }] },
  ];

  return (
    <div ref={ref} className="h-7 flex items-center px-2 shrink-0 border-b z-50 select-none" style={{ backgroundColor: theme.menuBar, borderColor: theme.border }}>
      {menus.map((menu) => (
        <div key={menu.name} className="relative">
          <button
            onClick={() => setOpenMenu(openMenu === menu.name ? null : menu.name)}
            className="px-3 h-7 text-[13px] transition-colors"
            style={{ color: theme.text, backgroundColor: openMenu === menu.name ? theme.hover : "transparent" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.hover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = openMenu === menu.name ? theme.hover : "transparent")}
          >
            {menu.name}
          </button>
          {openMenu === menu.name && (
            <div className="absolute top-full left-0 w-52 border shadow-xl z-50 py-1" style={{ backgroundColor: theme.sidebar, borderColor: theme.border }}>
              {menu.items.map((item) =>
                item.divider ? (
                  <div key={item.label} className="border-t my-1" style={{ borderColor: theme.border }} />
                ) : (
                  <button
                    key={item.label}
                    onClick={() => { item.action?.(); setOpenMenu(null); }}
                    className="flex items-center justify-between w-full px-4 py-1 text-[13px] transition-colors"
                    style={{ color: theme.text }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = theme.accent; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = theme.text; }}
                  >
                    <span>{item.label}</span>
                    {item.shortcut && <span className="text-[11px] ml-4" style={{ color: theme.textMuted }}>{item.shortcut}</span>}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
