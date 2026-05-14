import type { FileType } from "../App";
import type { Theme } from "./SettingsPanel";
import { AboutFile } from "./files/AboutFile";
import { SkillsFile } from "./files/SkillsFile";
import { ProjectsFile } from "./files/ProjectsFile";
import { ContactFile } from "./files/ContactFile";

interface EditorAreaProps { activeFile: FileType | null; theme: Theme; }

export function EditorArea({ activeFile, theme }: EditorAreaProps) {
  if (!activeFile) {
    return (
      <div className="flex-1 flex items-center justify-center" style={{ backgroundColor: theme.bg }}>
        <span className="text-6xl font-extralight tracking-widest pointer-events-none opacity-10" style={{ color: theme.text }}>
          VS CODE
        </span>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-auto p-4 code-font text-[15px] leading-relaxed relative" style={{ backgroundColor: theme.bg }}>
      {activeFile === "about.kt"     && <AboutFile />}
      {activeFile === "skills.xml"   && <SkillsFile />}
      {activeFile === "projects.md"  && <ProjectsFile />}
      {activeFile === "contact.json" && <ContactFile />}
    </div>
  );
}
