import type { Theme } from "./SettingsPanel";

interface TitleBarProps { theme: Theme; }

export function TitleBar({ theme }: TitleBarProps) {
  return (
    <div className="h-8 flex items-center px-3 shrink-0 select-none border-b" style={{ backgroundColor: theme.titleBar, borderColor: theme.border }}>
      <div className="flex items-center gap-1.5 mr-4">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57] cursor-pointer hover:brightness-90" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e] cursor-pointer hover:brightness-90" />
        <span className="w-3 h-3 rounded-full bg-[#28c840] cursor-pointer hover:brightness-90" />
      </div>
      <div className="flex-1 text-center text-xs" style={{ color: theme.textMuted }}>
        pankaj-portfolio — Visual Studio Code
      </div>
      <div className="w-16" />
    </div>
  );
}
