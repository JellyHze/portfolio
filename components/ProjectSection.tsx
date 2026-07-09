"use client";

import { useMemo, useState } from "react";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";

const defaultFilter = "All";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState(defaultFilter);
  const [searchKeyword, setSearchKeyword] = useState("");

  const filters = useMemo(() => {
    const statusFilters = projects.map((project) => project.status);
    const techFilters = projects.flatMap((project) => project.tech);

    return [defaultFilter, ...new Set([...statusFilters, ...techFilters])];
  }, []);

  const filteredProjects = useMemo(() => {
    const keyword = searchKeyword.toLowerCase().trim();

    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === defaultFilter ||
        project.status === activeFilter ||
        project.tech.includes(activeFilter);

      const searchableText = [
        project.title,
        project.description,
        project.status,
        project.tech.join(" "),
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = !keyword || searchableText.includes(keyword);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchKeyword]);

  return (
    <section id="projects" className="py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Selected Works"
            title="Project yang pernah saya bangun."
            description="Kumpulan project yang mencerminkan pengalaman saya dalam membangun website modern, sistem informasi, dan integrasi teknologi mulai dari frontend engineering, full-stack development, hingga machine learning."
          />
        </Reveal>

        <Reveal>
          <div className="mb-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 sm:p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => {
                  const isActive = activeFilter === filter;

                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setActiveFilter(filter)}
                      className={[
                        "rounded-full border px-4 py-2 text-sm transition",
                        isActive
                          ? "border-violet-400 bg-violet-400 text-black"
                          : "border-white/10 bg-black/30 text-zinc-300 hover:border-violet-400 hover:text-white",
                      ].join(" ")}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>

              <div className="w-full lg:max-w-xs">
                <label htmlFor="project-search" className="sr-only">
                  Search project
                </label>
                <input
                  id="project-search"
                  type="search"
                  value={searchKeyword}
                  onChange={(event) => setSearchKeyword(event.target.value)}
                  placeholder="Cari project..."
                  className="w-full rounded-full border border-white/10 bg-black/40 px-5 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400"
                />
              </div>
            </div>

            <p className="mt-4 text-sm text-zinc-500">
              Menampilkan {filteredProjects.length} dari {projects.length}{" "}
              project.
            </p>
          </div>
        </Reveal>

        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <Reveal key={project.title} delay={index * 120}>
                <ProjectCard {...project} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 text-center">
              <p className="text-lg font-semibold text-white">
                Project tidak ditemukan.
              </p>
              <p className="mt-3 text-zinc-400">
                Coba gunakan kata kunci lain atau pilih filter All.
              </p>

              <button
                type="button"
                onClick={() => {
                  setActiveFilter(defaultFilter);
                  setSearchKeyword("");
                }}
                className="mt-6 rounded-full bg-violet-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-violet-300"
              >
                Reset Filter
              </button>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}