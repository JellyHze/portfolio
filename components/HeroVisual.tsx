const techItems = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "GitHub",
  "Vercel",
];

export default function HeroVisual() {
  return (
    <div className="relative mx-auto mt-14 h-72 max-w-3xl sm:h-80">
      <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/20 bg-white/[0.03] shadow-[0_0_80px_rgba(139,92,246,0.25)]" />

      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/60 p-5 text-center backdrop-blur">
        <div className="flex h-full flex-col items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
          <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
            Stack
          </p>
          <p className="mt-2 text-lg font-semibold text-white">Web Dev</p>
        </div>
      </div>

      {techItems.map((item, index) => {
        const positions = [
          "left-4 top-8",
          "right-8 top-10",
          "left-16 bottom-10",
          "right-4 bottom-14",
          "left-1/2 top-0 -translate-x-1/2",
          "left-1/2 bottom-0 -translate-x-1/2",
        ];

        return (
          <div
            key={item}
            className={[
              "absolute rounded-2xl border border-white/10 bg-black/50 px-5 py-3 text-sm font-medium text-zinc-200 shadow-2xl backdrop-blur-xl",
              "animate-[float_6s_ease-in-out_infinite]",
              positions[index],
            ].join(" ")}
            style={{
              animationDelay: `${index * 350}ms`,
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}