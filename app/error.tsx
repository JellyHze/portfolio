"use client";

import { useEffect } from "react";
import Container from "@/components/Container";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen items-center">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-red-300">
              Error
            </p>

            <h1 className="mt-4 text-4xl font-bold text-white sm:text-6xl">
              Ada sesuatu yang bermasalah.
            </h1>

            <p className="mt-5 leading-8 text-zinc-400">
              Halaman gagal ditampilkan. Kamu bisa mencoba memuat ulang bagian
              ini tanpa perlu kembali ke halaman awal.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={reset}
                className="rounded-full bg-violet-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-violet-300"
              >
                Coba Lagi
              </button>

              <a
                href="/"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-400"
              >
                Kembali ke Home
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}