import { useState } from "react";
import { ChevronDown, ChevronRight, FileCode2, FileJson, FileText, Folder, FolderOpen } from "lucide-react";
import type { FileType } from "../App";
import type { Theme } from "./SettingsPanel";

interface SidebarProps { activeFile: FileType | null; onOpenFile: (file: FileType) => void; theme: Theme; }
type FolderName = "src" | "src/res/layout" | "docs" | "src/config";

export function Sidebar({ activeFile, onOpenFile, theme }: SidebarProps) {
  const [openFolders, setOpenFolders] = useState<Set<FolderName>>(new Set(["src", "src/res/layout", "docs", "src/config"]));
  const [rootOpen, setRootOpen] = useState(true);

  const toggleFolder = (folder: FolderName) => {
    setOpenFolders((prev) => { const n = new Set(prev); n.has(folder) ? n.delete(folder) : n.add(folder); return n; });
  };

  const FileRow = ({ file, icon, color, indent }: { file: FileType; icon: React.ReactNode; color: string; indent: number }) => {
    const isActive = activeFile === file;
    return (
      <button
        onClick={() => onOpenFile(file)}
        style={{ paddingLeft: `${indent}px`, backgroundColor: isActive ? theme.hover : "transparent", color: isActive ? theme.text : theme.text }}
        className="flex items-center gap-1.5 py-[3px] pr-3 text-[13px] w-full text-left transition-colors"
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.hover)}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = isActive ? theme.hover : "transparent")}
        data-testid={`file-${file}`}
      >
        <span style={{ color }}>{icon}</span>
        <span>{file}</span>
      </button>
    );
  };

  const FolderRow = ({ name, label, indent }: { name: FolderName; label: string; indent: number }) => {
    const isOpen = openFolders.has(name);
    return (
      <button
        onClick={() => toggleFolder(name)}
        style={{ paddingLeft: `${indent}px`, color: theme.text }}
        className="flex items-center gap-1 py-[3px] pr-3 text-[13px] w-full text-left transition-colors"
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.hover)}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
      >
        {isOpen ? <ChevronDown className="w-3.5 h-3.5 shrink-0" style={{ color: theme.textMuted }} /> : <ChevronRight className="w-3.5 h-3.5 shrink-0" style={{ color: theme.textMuted }} />}
        {isOpen ? <FolderOpen className="w-4 h-4 shrink-0 text-[#dcb67a]" /> : <Folder className="w-4 h-4 shrink-0 text-[#dcb67a]" />}
        <span>{label}</span>
      </button>
    );
  };

  return (
    <div className="w-60 flex flex-col overflow-y-auto shrink-0 border-r select-none" style={{ backgroundColor: theme.sidebar, borderColor: theme.border }}>
      <div className="px-4 py-2 text-[11px] font-semibold tracking-widest uppercase" style={{ color: theme.textMuted }}>Explorer</div>
      <button
        onClick={() => setRootOpen((v) => !v)}
        className="flex items-center gap-1 px-2 py-[3px] text-[13px] w-full text-left font-semibold transition-colors"
        style={{ color: theme.text }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.hover)}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
      >
        {rootOpen ? <ChevronDown className="w-3.5 h-3.5 shrink-0" style={{ color: theme.textMuted }} /> : <ChevronRight className="w-3.5 h-3.5 shrink-0" style={{ color: theme.textMuted }} />}
        <span className="text-[12px] tracking-wider uppercase font-bold">PANKAJ-PORTFOLIO</span>
      </button>

      {rootOpen && (
        <>
          <FolderRow name="src" label="src" indent={16} />
          {openFolders.has("src") && (
            <>
              <FileRow file="about.kt" icon={<FileCode2 className="w-4 h-4" />} color="#a97bff" indent={36} />
              <FolderRow name="src/res/layout" label="res/layout" indent={36} />
              {openFolders.has("src/res/layout") && <FileRow file="skills.xml" icon={<FileCode2 className="w-4 h-4" />} color="#569cd6" indent={56} />}
              <FolderRow name="src/config" label="config" indent={36} />
              {openFolders.has("src/config") && <FileRow file="contact.json" icon={<FileJson className="w-4 h-4" />} color="#cbcb41" indent={56} />}
            </>
          )}
          <FolderRow name="docs" label="docs" indent={16} />
          {openFolders.has("docs") && <FileRow file="projects.md" icon={<FileText className="w-4 h-4" />} color="#42b883" indent={36} />}
        </>
      )}
    </div>
  );
}
