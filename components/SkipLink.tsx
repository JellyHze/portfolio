export default function SkipLink() {
  return (
    <a
      href="#home"
      tabIndex={0}
      className="fixed left-4 top-4 z-[100] -translate-y-32 opacity-0 rounded-full bg-violet-400 px-5 py-3 text-sm font-semibold text-black transition focus:translate-y-0 focus:opacity-100"
    >
      Skip to content
    </a>
  );
}