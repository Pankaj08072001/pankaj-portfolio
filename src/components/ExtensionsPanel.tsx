import { Download, Check } from "lucide-react";
import { useState } from "react";
import type { Theme } from "./SettingsPanel";

const EXTENSIONS = [
  { id: "kotlin",     name: "Kotlin",              publisher: "JetBrains",    desc: "Kotlin language support", installed: true,  color: "#a97bff" },
  { id: "android",    name: "Android Studio Tools", publisher: "Google",       desc: "Android development tools & ADB", installed: true,  color: "#3ddc84" },
  { id: "xml",        name: "XML Tools",            publisher: "DotJoshJohnson",desc: "XML formatting and validation", installed: true,  color: "#569cd6" },
  { id: "gitlens",    name: "GitLens",              publisher: "GitKraken",    desc: "Supercharge Git in VS Code", installed: false, color: "#f05033" },
  { id: "prettier",   name: "Prettier",             publisher: "Prettier",     desc: "Code formatter", installed: true,  color: "#56b3b4" },
  { id: "adb",        name: "ADB Interface",        publisher: "DevTools",     desc: "ADB commands from the editor", installed: false, color: "#ff6b35" },
  { id: "gradle",     name: "Gradle for Java",      publisher: "Microsoft",    desc: "Gradle build support", installed: true,  color: "#02303a" },
];

interface ExtensionsPanelProps { theme: Theme; }

export function ExtensionsPanel({ theme }: ExtensionsPanelProps) {
  const [installed, setInstalled] = useState<Set<string>>(
    new Set(EXTENSIONS.filter((e) => e.installed).map((e) => e.id))
  );

  return (
    <div className="w-64 flex flex-col overflow-hidden shrink-0 border-r" style={{ backgroundColor: theme.sidebar, borderColor: theme.border }}>
      <div className="px-4 py-2 text-[11px] font-semibold tracking-widest uppercase border-b" style={{ color: theme.textMuted, borderColor: theme.border }}>
        Extensions
      </div>

      <div className="px-3 py-1.5 text-[10px] font-semibold tracking-widest uppercase" style={{ color: theme.textMuted }}>
        Installed
      </div>

      <div className="flex-1 overflow-y-auto">
        {EXTENSIONS.map((ext) => {
          const isInstalled = installed.has(ext.id);
          return (
            <div
              key={ext.id}
              className="flex items-start gap-2 px-3 py-2 cursor-pointer"
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.hover)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <div className="w-8 h-8 rounded flex items-center justify-center shrink-0 text-white text-[10px] font-bold" style={{ backgroundColor: ext.color }}>
                {ext.name.slice(0, 2).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium truncate" style={{ color: theme.text }}>{ext.name}</span>
                  <button
                    onClick={() => setInstalled((prev) => { const n = new Set(prev); isInstalled ? n.delete(ext.id) : n.add(ext.id); return n; })}
                    className="shrink-0 ml-1"
                    style={{ color: isInstalled ? theme.textMuted : theme.accent }}
                    title={isInstalled ? "Uninstall" : "Install"}
                  >
                    {isInstalled ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="text-[11px] truncate" style={{ color: theme.textMuted }}>{ext.publisher}</div>
                <div className="text-[11px] truncate mt-0.5" style={{ color: theme.textMuted }}>{ext.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
