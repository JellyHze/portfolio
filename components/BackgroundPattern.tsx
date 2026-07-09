export default function BackgroundPattern() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-black" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_72%)]" />

      <div className="absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-emerald-500/10 blur-[120px]" />
    </div>
  );
}