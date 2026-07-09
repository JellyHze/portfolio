import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SiteShell from "@/components/SiteShell";

import {
  getProjectBySlug,
  projects,
} from "@/data/portfolio";


type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};


export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}


export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {

  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}


export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {

  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }


  const hasDemo =
    project.link && project.link !== "#";

  const hasRepo =
    project.repo && project.repo !== "#";


  return (
    <SiteShell>

      <section className="relative pb-16 pt-24 sm:pb-20 sm:pt-32">

        <div
          className="
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.3),_transparent_35%)]
          "
        />


        <Container>

          <Reveal>

            <Link
              href="/#projects"
              className="
              text-sm
              font-medium
              text-violet-300
              transition
              hover:text-violet-200
              "
            >
              ← Back to projects
            </Link>


            <div className="mt-8 max-w-5xl sm:mt-10">

              <span
                className="
                inline-flex
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-4
                py-2
                text-sm
                text-violet-200
                "
              >
                {project.status}
              </span>


              <h1
                className="
                mt-5
                text-3xl
                font-bold
                leading-tight
                tracking-tight
                text-white
                sm:text-6xl
                "
              >
                {project.title}
              </h1>


              <p
                className="
                mt-5
                text-base
                leading-7
                text-zinc-400
                sm:mt-6
                sm:text-lg
                sm:leading-8
                "
              >
                {project.longDescription}
              </p>


              <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">

                {project.tech.map((item) => (

                  <span
                    key={item}
                    className="
                    rounded-full
                    border
                    border-white/10
                    bg-black/30
                    px-3
                    py-1.5
                    text-xs
                    text-zinc-300
                    sm:px-4
                    sm:py-2
                    sm:text-sm
                    "
                  >
                    {item}
                  </span>

                ))}

              </div>


              <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">

                {hasDemo && (

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="
                    rounded-full
                    bg-violet-400
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-black
                    transition
                    hover:bg-violet-300
                    "
                  >
                    Live Demo
                  </a>

                )}


                {hasRepo && (

                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="
                    rounded-full
                    border
                    border-white/15
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:border-violet-400
                    "
                  >
                    Source Code
                  </a>

                )}

              </div>

            </div>

          </Reveal>

        </Container>

      </section>


      {/* MAIN IMAGE */}

      <section className="pb-12 sm:pb-16">

        <Container>

          <Reveal>

            {project.image && (

              <div
                className="
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-black
                sm:rounded-[2rem]
                "
              >

                <div
                  className="
                  relative
                  aspect-[16/10]
                  sm:aspect-video
                  "
                >

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 900px"
                    className="
                    object-contain
                    transition
                    duration-700
                    hover:scale-105
                    "
                    priority
                  />

                </div>

              </div>

            )}

          </Reveal>

        </Container>

      </section>
            {/* PROJECT INFORMATION */}

      <section className="pb-14 sm:pb-20">

        <Container>

          <div className="grid gap-5 lg:grid-cols-3">

            <Reveal>
              <InfoBlock
                title="Project Overview"
                description={project.overview}
              />
            </Reveal>


            <Reveal delay={120}>
              <InfoBlock
                title="My Role"
                description={project.role}
              />
            </Reveal>


            <Reveal delay={240}>
              <ListBlock
                title="Technical Implementation"
                items={project.implementation}
              />
            </Reveal>

          </div>

        </Container>

      </section>



      {/* GALLERY */}

      {project.images && project.images.length > 1 && (

        <section className="pb-14 sm:pb-20">

          <Container>

            <Reveal>

              <h2
                className="
                mb-5
                text-2xl
                font-semibold
                text-white
                sm:mb-6
                "
              >
                Project Gallery
              </h2>


              <div className="grid gap-5 md:grid-cols-2">

                {project.images.map((image) => (

                  <div
                    key={image}
                    className="
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-black
                    "
                  >

                    <div
                      className="
                      relative
                      aspect-[16/10]
                      "
                    >

                      <Image
                        src={image}
                        alt={project.title}
                        fill
                        sizes="(max-width:768px) 100vw, 50vw"
                        className="
                        object-contain
                        transition
                        duration-500
                        hover:scale-105
                        "
                      />

                    </div>

                  </div>

                ))}

              </div>

            </Reveal>

          </Container>

        </section>

      )}



      {/* FEATURES */}

      <section className="pb-20">

        <Container>

          <div className="grid gap-5 lg:grid-cols-3">

            <DetailBlock
              title="Main Features"
              items={project.features}
            />


            <DetailBlock
              title="Challenges"
              items={project.challenges}
            />


            <DetailBlock
              title="What I Learned"
              items={project.learnings}
            />

          </div>

        </Container>

      </section>


    </SiteShell>
  );
}





type DetailBlockProps = {
  title: string;
  items: string[];
};


function DetailBlock({
  title,
  items,
}: DetailBlockProps) {

  return (
    <div
      className="
      h-full
      rounded-3xl
      border
      border-white/10
      bg-white/[0.03]
      p-5
      sm:p-6
      "
    >

      <h2 className="text-xl font-semibold text-white">
        {title}
      </h2>


      <ul className="mt-5 space-y-3">

        {items.map((item) => (

          <li
            key={item}
            className="
            flex
            gap-3
            text-sm
            leading-7
            text-zinc-400
            "
          >

            <span
              className="
              mt-2
              h-1.5
              w-1.5
              shrink-0
              rounded-full
              bg-violet-300
              "
            />

            <span>
              {item}
            </span>

          </li>

        ))}

      </ul>

    </div>
  );
}





type InfoBlockProps = {
  title: string;
  description: string;
};


function InfoBlock({
  title,
  description,
}: InfoBlockProps) {

  return (
    <div
      className="
      h-full
      rounded-3xl
      border
      border-white/10
      bg-white/[0.03]
      p-5
      sm:p-6
      "
    >

      <h2 className="text-xl font-semibold text-white">
        {title}
      </h2>


      <p
        className="
        mt-5
        text-sm
        leading-7
        text-zinc-400
        "
      >
        {description}
      </p>

    </div>
  );
}





type ListBlockProps = {
  title: string;
  items: string[];
};


function ListBlock({
  title,
  items,
}: ListBlockProps) {

  return (
    <div
      className="
      h-full
      rounded-3xl
      border
      border-white/10
      bg-white/[0.03]
      p-5
      sm:p-6
      "
    >

      <h2 className="text-xl font-semibold text-white">
        {title}
      </h2>


      <ul className="mt-5 space-y-3">

        {items.map((item) => (

          <li
            key={item}
            className="
            flex
            gap-3
            text-sm
            leading-7
            text-zinc-400
            "
          >

            <span
              className="
              mt-2
              h-1.5
              w-1.5
              shrink-0
              rounded-full
              bg-violet-300
              "
            />

            <span>
              {item}
            </span>

          </li>

        ))}

      </ul>

    </div>
  );
}