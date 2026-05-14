import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import type { Theme } from "./SettingsPanel";

interface ProfilePanelProps { theme: Theme; }

const STATS = [{ label: "Projects", value: "5+" }, { label: "Skills", value: "10+" }, { label: "Experience", value: "2yr" }];

export function ProfilePanel({ theme }: ProfilePanelProps) {
  return (
    <div className="w-64 flex flex-col overflow-y-auto shrink-0 border-r" style={{ backgroundColor: theme.sidebar, borderColor: theme.border }}>
      <div className="px-4 py-2 text-[11px] font-semibold tracking-widest uppercase border-b" style={{ color: theme.textMuted, borderColor: theme.border }}>
        Profile
      </div>

      <div className="flex flex-col items-center px-4 py-6 gap-3">
        <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white" style={{ background: `linear-gradient(135deg, ${theme.accent}, ${theme.accent}88)` }}>
          PC
        </div>
        <div className="text-center">
          <div className="text-[15px] font-semibold" style={{ color: theme.text }}>Pankaj Chaudhary</div>
          <div className="text-[12px] mt-0.5" style={{ color: theme.accent }}>Android Developer</div>
          <div className="text-[11px] mt-1" style={{ color: theme.textMuted }}>Building powerful Android tools</div>
        </div>

        <div className="w-full border-t pt-3" style={{ borderColor: theme.border }}>
          <div className="grid grid-cols-3 gap-2 text-center">
            {STATS.map((s) => (
              <div key={s.label} className="rounded p-2" style={{ backgroundColor: theme.hover }}>
                <div className="text-[15px] font-bold" style={{ color: theme.accent }}>{s.value}</div>
                <div className="text-[10px]" style={{ color: theme.textMuted }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full border-t pt-3" style={{ borderColor: theme.border }}>
          <div className="text-[10px] font-semibold tracking-widest uppercase mb-2" style={{ color: theme.textMuted }}>Connect</div>
          <div className="flex flex-col gap-1">
            {[
              { icon: Github,   label: "GitHub",   value: "github.com/pankajchaudhary",     href: "https://github.com" },
              { icon: Linkedin, label: "LinkedIn",  value: "in/pankajchaudhary",             href: "https://linkedin.com" },
              { icon: Mail,     label: "Email",     value: "pankaj@example.com",             href: "mailto:pankaj@example.com" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-2 py-1.5 rounded text-[12px] transition-colors group"
                style={{ color: theme.text }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.hover)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: theme.textMuted }} />
                <div className="flex-1 min-w-0">
                  <div className="text-[10px]" style={{ color: theme.textMuted }}>{label}</div>
                  <div className="truncate text-[11px]">{value}</div>
                </div>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100" style={{ color: theme.textMuted }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
