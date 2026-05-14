import type { FileType } from "../App";
import type { Theme } from "./SettingsPanel";

interface BreadcrumbsProps { activeFile: FileType | null; theme: Theme; }

const fileFolderMap: Record<FileType, string> = {
  "about.kt":      "src",
  "skills.xml":    "src/res/layout",
  "projects.md":   "docs",
  "contact.json":  "src/config",
};

export function Breadcrumbs({ activeFile, theme }: BreadcrumbsProps) {
  if (!activeFile) return <div className="h-6 border-b shrink-0" style={{ backgroundColor: theme.bg, borderColor: theme.border }} />;

  const parts = fileFolderMap[activeFile].split("/");

  return (
    <div className="h-6 border-b flex items-center px-4 gap-1 shrink-0 select-none" style={{ backgroundColor: theme.bg, borderColor: theme.border }}>
      <span className="text-[11px] cursor-pointer hover:underline" style={{ color: theme.textMuted }}>pankaj-portfolio</span>
      {parts.map((part) => (
        <span key={part} className="flex items-center gap-1">
          <span className="text-[11px]" style={{ color: theme.border }}>›</span>
          <span className="text-[11px] cursor-pointer hover:underline" style={{ color: theme.textMuted }}>{part}</span>
        </span>
      ))}
      <span className="text-[11px]" style={{ color: theme.border }}>›</span>
      <span className="text-[11px] font-medium" style={{ color: theme.text }}>{activeFile}</span>
    </div>
  );
}
