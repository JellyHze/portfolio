export default function Loading() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex min-h-screen items-center justify-center px-5">
        <div className="text-center">
          <div className="mx-auto h-14 w-14 animate-spin rounded-full border border-white/10 border-t-violet-300" />

          <p className="mt-6 text-sm font-medium uppercase tracking-[0.3em] text-violet-300">
            Loading
          </p>

          <h1 className="mt-4 text-2xl font-semibold text-white">
            Sedang menyiapkan halaman...
          </h1>

          <p className="mt-3 text-sm text-zinc-400">
            Tunggu sebentar, konten sedang dimuat.
          </p>
        </div>
      </div>
    </main>
  );
}