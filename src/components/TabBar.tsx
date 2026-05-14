import { X, FileCode2, FileJson, FileText } from "lucide-react";
import type { FileType } from "../App";
import type { Theme } from "./SettingsPanel";

interface TabBarProps {
  openFiles: FileType[];
  activeFile: FileType | null;
  onOpenFile: (file: FileType) => void;
  onCloseFile: (file: FileType) => void;
  theme: Theme;
}

const getFileIcon = (fileName: string) => {
  if (fileName.endsWith(".kt"))   return <FileCode2 className="w-4 h-4" style={{ color: "#a97bff" }} />;
  if (fileName.endsWith(".xml"))  return <FileCode2 className="w-4 h-4" style={{ color: "#569cd6" }} />;
  if (fileName.endsWith(".md"))   return <FileText   className="w-4 h-4" style={{ color: "#42b883" }} />;
  if (fileName.endsWith(".json")) return <FileJson   className="w-4 h-4" style={{ color: "#cbcb41" }} />;
  return <FileText className="w-4 h-4" />;
};

export function TabBar({ openFiles, activeFile, onOpenFile, onCloseFile, theme }: TabBarProps) {
  return (
    <div className="flex h-9 overflow-x-auto overflow-y-hidden shrink-0 no-scrollbar" style={{ backgroundColor: theme.tabBar }}>
      {openFiles.map((file) => {
        const isActive = activeFile === file;
        return (
          <div
            key={file}
            className="flex items-center px-3 min-w-[120px] max-w-[200px] h-full cursor-pointer border-r group"
            style={{
              backgroundColor: isActive ? theme.bg : theme.tabInactive,
              color: isActive ? theme.text : theme.textMuted,
              borderColor: theme.border,
              borderTop: isActive ? `1px solid ${theme.accent}` : "1px solid transparent",
            }}
            onClick={() => onOpenFile(file)}
          >
            <span className="mr-2 flex-shrink-0">{getFileIcon(file)}</span>
            <span className="text-sm truncate flex-1">{file}</span>
            <button
              onClick={(e) => { e.stopPropagation(); onCloseFile(file); }}
              className="ml-2 p-0.5 rounded-md flex-shrink-0 opacity-0 group-hover:opacity-100"
              style={{ color: theme.textMuted }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.hover)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
