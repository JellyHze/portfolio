import Link from "next/link";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="relative flex min-h-screen items-center pt-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.28),_transparent_35%)]" />

        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-300">
              404
            </p>

            <h1 className="mt-4 text-4xl font-bold text-white sm:text-6xl">
              Halaman tidak ditemukan.
            </h1>

            <p className="mt-5 leading-8 text-zinc-400">
              Halaman yang kamu cari mungkin sudah dipindahkan, belum tersedia,
              atau URL-nya tidak sesuai.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="rounded-full bg-violet-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-violet-300"
              >
                Kembali ke Home
              </Link>

              <Link
                href="/#projects"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-400"
              >
                Lihat Project
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}