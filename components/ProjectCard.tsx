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
      <article
        className="
        group relative overflow-hidden rounded-[2rem]
        border border-white/10
        bg-gradient-to-br from-white/[0.05] to-white/[0.02]
        p-6
        transition-all duration-500
        hover:-translate-y-2
        hover:border-violet-400/50
        hover:shadow-[0_20px_80px_rgba(139,92,246,0.18)]
        "
      >

      {/* glow */}
      <div
        className="
        pointer-events-none
        absolute
        -right-24
        -top-24
        h-64
        w-64
        rounded-full
        bg-violet-500/20
        blur-3xl
        opacity-70
        transition-all
        duration-700
        group-hover:scale-125
        group-hover:bg-violet-400/30
        "
      />


      <div className="relative">


        {/* category badge */}

        <div className="mb-5 flex items-center justify-between">

          <span
            className="
            rounded-full
            border border-violet-400/30
            bg-violet-400/10
            px-3 py-1
            text-xs font-medium
            text-violet-300
            "
          >
            {status}
          </span>


          <span
            className="
            text-xs text-zinc-500
            opacity-0
            transition
            duration-300
            group-hover:opacity-100
            "
          >
            View Project
          </span>


        </div>



        {/* preview */}

          <div
            className="
            relative
            overflow-hidden
            rounded-[1.5rem]
            border
            border-white/10
            transition-all
            duration-500
            group-hover:scale-[1.02]
            "
          >

          <ProjectPreview
            title={title}
            status={status}
            tech={tech}
            image={image}
          />

        </div>




        {/* content */}

        <div className="mt-7">


          <h3
            className="
            text-2xl
            font-semibold
            tracking-tight
            text-white
            transition
            group-hover:text-violet-200
            "
          >
            {title}
          </h3>



          <p
            className="
            mt-4
            leading-7
            text-zinc-400
            "
          >
            {description}
          </p>




          {/* tech */}

          <div className="mt-6 flex flex-wrap gap-2">

            {tech.map((item)=>(
              <span
                key={item}
                className="
                rounded-full
                border border-white/10
                bg-black/30
                px-3 py-1
                text-xs
                text-zinc-300
                transition
                hover:border-violet-400/40
                hover:text-white
                "
              >
                {item}
              </span>
            ))}

          </div>




          {/* action */}

          <div
            className="
            mt-7
            flex
            flex-wrap
            items-center
            gap-5
            "
          >

            <Link
              href={`/projects/${slug}`}
              className="
              text-sm
              font-semibold
              text-violet-300
              transition
              hover:text-violet-200
              "
            >
              Case Study →
            </Link>



            {hasDemo && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                className="
                text-sm
                text-zinc-400
                transition
                hover:text-white
                "
              >
                Live Demo ↗
              </a>
            )}



            {hasRepo && (
              <a
                href={repo}
                target="_blank"
                rel="noreferrer noopener"
                className="
                text-sm
                text-zinc-400
                transition
                hover:text-white
                "
              >
                GitHub ↗
              </a>
            )}

          </div>



        </div>


      </div>


    </article>
  );
}