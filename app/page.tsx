import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { profile, projects, skills } from "@/data/portfolio";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      <section
        id="home"
        className="relative flex min-h-screen items-center pt-24"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.35),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.18),_transparent_30%)]" />
        <div className="absolute left-1/2 top-28 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />

        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
              Available for new project
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
              {profile.name}
            </h1>

            <p className="mt-5 text-xl font-medium text-violet-300 sm:text-2xl">
              {profile.role}
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-violet-200"
              >
                Lihat Project
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-400 hover:bg-violet-400/10"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className="py-24">
        <Container>
          <SectionHeading
            eyebrow="About"
            title="Website yang rapi, cepat, dan mudah dirawat."
            description={profile.description}
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Clean Code", "Struktur file dipisah agar mudah dikembangkan."],
              ["Responsive", "Nyaman dibuka di laptop, tablet, dan HP."],
              ["Secure Basic", "Link, metadata, dan header dibuat lebih aman."],
              ["Testable", "Data dan komponen dipisah agar mudah dites."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Tech Stack"
            title="Tools dan teknologi yang digunakan."
          />

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300 transition hover:border-violet-400/50 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section id="projects" className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Selected Works"
            title="Beberapa project pilihan."
            description="Bagian ini nanti bisa kamu isi dengan project asli dari GitHub, tugas kuliah, landing page, dashboard, atau aplikasi yang pernah kamu buat."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="py-24">
        <Container>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center sm:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-300">
              Contact
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
              Mari bangun sesuatu yang keren.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
              Terbuka untuk kolaborasi, freelance project, internship, atau
              diskusi seputar pengembangan website.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-violet-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-violet-300"
              >
                Email Saya
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-400"
              >
                GitHub
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}