export function SkillsFile() {
  const code = `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="16dp">

    <TextView
        android:id="@+id/tvSkillsTitle"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Technical Skills"
        android:textSize="24sp"
        android:textStyle="bold" />

    <com.google.android.material.chip.ChipGroup
        android:id="@+id/chipGroupSkills"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="16dp">

        <Chip android:text="Kotlin" />
        <Chip android:text="Java" />
        <Chip android:text="Android SDK" />
        <Chip android:text="Jetpack Compose" />
        <Chip android:text="MVVM / Clean Architecture" />
        <Chip android:text="Room DB" />
        <Chip android:text="Retrofit" />
        <Chip android:text="Coroutines" />
        <Chip android:text="Git" />
        <Chip android:text="Android Studio" />

    </com.google.android.material.chip.ChipGroup>

</LinearLayout>
`;

  const lines = code.split('\n');

  return (
    <div className="flex">
      <div className="flex flex-col text-vscode-line-number text-right pr-4 mr-4 border-r border-[#2d2d2d] select-none opacity-50 shrink-0">
        {lines.map((_, i) => (
          <span key={i} className="min-w-[20px]">{i + 1}</span>
        ))}
      </div>
      <div className="whitespace-pre overflow-x-auto w-full">
        {lines.map((line, i) => {
          const formattedLine = line
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/&lt;([a-zA-Z0-9.\-]+)/g, '&lt;<span class="token-tag">$1</span>')
            .replace(/&lt;\/([a-zA-Z0-9.\-]+)&gt;/g, '&lt;/<span class="token-tag">$1</span>&gt;')
            .replace(/([a-zA-Z0-9:]+)="/g, '<span class="token-attr">$1</span>="<span class="token-string">')
            .replace(/"/g, '</span>"');

          return (
            <div 
              key={i} 
              dangerouslySetInnerHTML={{ __html: formattedLine || ' ' }}
              style={{ minHeight: '1.5em' }}
            />
          );
        })}
      </div>
    </div>
  );
}
