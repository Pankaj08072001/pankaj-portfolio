import { useState, useEffect } from "react";
import { TitleBar } from "./components/TitleBar";
import { MenuBar } from "./components/MenuBar";
import { ActivityBar } from "./components/ActivityBar";
import type { PanelType } from "./components/ActivityBar";
import { Sidebar } from "./components/Sidebar";
import { SettingsPanel, THEMES } from "./components/SettingsPanel";
import type { ThemeName } from "./components/SettingsPanel";
import { SearchPanel } from "./components/SearchPanel";
import { ExtensionsPanel } from "./components/ExtensionsPanel";
import { ProfilePanel } from "./components/ProfilePanel";
import { TabBar } from "./components/TabBar";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { EditorArea } from "./components/EditorArea";
import { Terminal } from "./components/Terminal";
import { StatusBar } from "./components/StatusBar";

export type FileType = "about.kt" | "skills.xml" | "projects.md" | "contact.json";

function App() {
  const [activePanel, setActivePanel] = useState<PanelType>("explorer");
  const [openFiles, setOpenFiles] = useState<FileType[]>(["about.kt"]);
  const [activeFile, setActiveFile] = useState<FileType | null>("about.kt");
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeName>("Default Dark");

  const theme = THEMES.find((t) => t.name === currentTheme) ?? THEMES[0];

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "`") { e.preventDefault(); setTerminalOpen((v) => !v); }
      if (e.ctrlKey && e.key === "b") { e.preventDefault(); setActivePanel((v) => v ? null : "explorer"); }
      if (e.key === "F11") { e.preventDefault(); document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleOpenFile = (file: FileType) => {
    if (!openFiles.includes(file)) setOpenFiles([...openFiles, file]);
    setActiveFile(file);
  };

  const handleCloseFile = (file: FileType) => {
    const next = openFiles.filter((f) => f !== file);
    setOpenFiles(next);
    if (activeFile === file) setActiveFile(next.length > 0 ? next[next.length - 1] : null);
  };

  const sidebarVisible = activePanel !== null;

  return (
    <div className="flex flex-col h-screen w-full overflow-hidden transition-colors duration-200" style={{ backgroundColor: theme.bg, color: theme.text }}>
      <TitleBar theme={theme} />
      <MenuBar theme={theme} onToggleTerminal={() => setTerminalOpen((v) => !v)} onToggleSidebar={() => setActivePanel((v) => v ? null : "explorer")} />

      <div className="flex flex-1 overflow-hidden">
        <ActivityBar activePanel={activePanel} setActivePanel={setActivePanel} theme={theme} />

        {sidebarVisible && activePanel === "explorer"   && <Sidebar activeFile={activeFile} onOpenFile={handleOpenFile} theme={theme} />}
        {sidebarVisible && activePanel === "search"     && <SearchPanel theme={theme} />}
        {sidebarVisible && activePanel === "extensions" && <ExtensionsPanel theme={theme} />}
        {sidebarVisible && activePanel === "profile"    && <ProfilePanel theme={theme} />}
        {sidebarVisible && activePanel === "settings"   && (
          <SettingsPanel
            currentTheme={currentTheme}
            onThemeChange={setCurrentTheme}
            onToggleTerminal={() => setTerminalOpen((v) => !v)}
            onClose={() => setActivePanel(null)}
            theme={theme}
          />
        )}

        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <TabBar openFiles={openFiles} activeFile={activeFile} onOpenFile={setActiveFile} onCloseFile={handleCloseFile} theme={theme} />
          <Breadcrumbs activeFile={activeFile} theme={theme} />
          <EditorArea activeFile={activeFile} theme={theme} />
          {terminalOpen && <Terminal onClose={() => setTerminalOpen(false)} theme={theme} />}
        </div>
      </div>

      <StatusBar onToggleTerminal={() => setTerminalOpen((v) => !v)} terminalOpen={terminalOpen} currentTheme={currentTheme} accentColor={theme.statusBar} />
    </div>
  );
}

export default App;
