import Link from "next/link";
import ProjectPreview from "@/components/ProjectPreview";

type ProjectCardProps = {
  title: string;
  slug: string;
  description: string;
  image?: string;
  tech: string[];
  link: string;
  repo: string;
  status: string;
};

export default function ProjectCard({
  title,
  slug,
  description,
  image,
  tech,
  link,
  repo,
  status,
}: ProjectCardProps) {
  const hasDemo = link && link !== "#";
  const hasRepo = repo && repo !== "#";

  return (
    <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-white/[0.06]">
      <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-violet-500/20 blur-3xl transition group-hover:bg-violet-400/30" />

      <ProjectPreview title={title} status={status} tech={tech} image={image} />

      <div className="relative">
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

        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href={`/projects/${slug}`}
            className="text-sm font-medium text-violet-300 transition hover:text-violet-200"
          >
            View Case Study
          </Link>

          {hasDemo ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm font-medium text-zinc-400 transition hover:text-white"
            >
              Live Demo
            </a>
          ) : null}

          {hasRepo ? (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm font-medium text-zinc-400 transition hover:text-white"
            >
              Source Code
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}