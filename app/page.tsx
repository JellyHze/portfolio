import Container from "@/components/Container";
import Footer from "@/components/Footer";
import InfoCard from "@/components/InfoCard";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  education,
  experiences,
  profile,
  projects,
  services,
  skills,
  stats,
} from "@/data/portfolio";

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
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
              Available for freelance, internship, and collaboration
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

            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              {stats.map((item, index) => (
                <Reveal
                  key={item.label}
                  delay={index * 120}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="text-3xl font-bold text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-zinc-400">{item.label}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="about" className="py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title="Tentang saya dan cara saya membangun website."
              description={profile.description}
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 120}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-violet-400/40 hover:bg-white/[0.06]"
              >
                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-zinc-400">
                  {service.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="skills" className="py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Skills"
              title="Teknologi yang saya gunakan."
              description="Saya membagi skill berdasarkan area agar lebih mudah dibaca dan dikembangkan."
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {skills.map((group, index) => (
              <Reveal
                key={group.category}
                delay={index * 120}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {group.category}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="projects" className="py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Selected Works"
              title="Beberapa project pilihan."
              description="Bagian ini bisa kamu isi dengan project asli dari GitHub, tugas kuliah, landing page, dashboard, atau aplikasi web yang pernah kamu buat."
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 120}>
                <ProjectCard {...project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="experience" className="py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Journey"
              title="Pengalaman dan pendidikan."
              description="Bagian ini membantu pengunjung memahami proses belajar, pengalaman, dan latar belakang kamu."
            />
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              <Reveal>
                <h3 className="text-xl font-semibold text-white">Experience</h3>
              </Reveal>

              {experiences.map((item, index) => (
                <Reveal key={`${item.role}-${item.company}`} delay={index * 120}>
                  <InfoCard
                    title={item.role}
                    subtitle={item.company}
                    period={item.period}
                    description={item.description}
                  />
                </Reveal>
              ))}
            </div>

            <div className="space-y-6">
              <Reveal>
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </Reveal>

              {education.map((item, index) => (
                <Reveal key={`${item.school}-${item.major}`} delay={index * 120}>
                  <InfoCard
                    title={item.school}
                    subtitle={item.major}
                    period={item.period}
                    description={item.description}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="contact" className="py-24">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center sm:p-12">
              <div className="absolute left-1/2 top-0 -z-10 h-56 w-56 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />

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
          </Reveal>
        </Container>
      </section>

      <Footer />
    </main>
  );
}