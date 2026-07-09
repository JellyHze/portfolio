type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  repo: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  link,
  repo,
}: ProjectCardProps) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-violet-400/50 hover:bg-white/[0.06]">
      <div className="mb-6 h-44 rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.5),_transparent_35%),linear-gradient(135deg,_rgba(255,255,255,0.12),_rgba(255,255,255,0.02))]" />

      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <p className="mt-3 leading-7 text-zinc-400">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="text-sm font-medium text-violet-300 hover:text-violet-200"
        >
          Live Demo
        </a>
        <a
          href={repo}
          target="_blank"
          rel="noreferrer noopener"
          className="text-sm font-medium text-zinc-400 hover:text-white"
        >
          Source Code
        </a>
      </div>
    </article>
  );
}