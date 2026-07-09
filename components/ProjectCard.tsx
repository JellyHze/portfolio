type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  repo: string;
  status: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  link,
  repo,
  status,
}: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-white/[0.06]">
      <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-violet-500/20 blur-3xl transition group-hover:bg-violet-400/30" />

      <div className="relative mb-6 flex h-44 items-center justify-center rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.45),_transparent_35%),linear-gradient(135deg,_rgba(255,255,255,0.12),_rgba(255,255,255,0.02))]">
        <span className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs font-medium text-violet-200 backdrop-blur">
          {status}
        </span>
      </div>

      <h3 className="relative text-xl font-semibold text-white">{title}</h3>

      <p className="relative mt-3 leading-7 text-zinc-400">{description}</p>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="relative mt-6 flex gap-4">
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="text-sm font-medium text-violet-300 transition hover:text-violet-200"
        >
          Live Demo
        </a>

        <a
          href={repo}
          target="_blank"
          rel="noreferrer noopener"
          className="text-sm font-medium text-zinc-400 transition hover:text-white"
        >
          Source Code
        </a>
      </div>
    </article>
  );
}