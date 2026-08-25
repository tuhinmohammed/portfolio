
import { MoveRight } from "lucide-react";

import { projects } from "@/data/project";

const Project = () => {
  function getStatusColor(status) {
    const normalizedStatus = status.toLowerCase();
    if (normalizedStatus === "live") {
      return "border-[#00d4aa] text-[#00d4aa]";
    } else if (normalizedStatus === "in progress") {
      return "border-[#facc15] text-[#facc15]";
    } else if (normalizedStatus === "planned") {
      return "border-[#55748c] text-[#55748c]";
    } else {
      return "border-[#55748c] text-[#55748c]";
    }
  }

  return (
    <section
      id="projects"
      className="hero-grid scroll-mt-20 px-6 pb-24 pt-20 sm:px-10 lg:px-[7.5%] lg:py-28 cursor-pointer"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <div>
          <p className="font-mono text-xs  tracking-[0.25em] text-[#00d4aa]">
            // 03 Projects
          </p>

          <div className="mt-4 h-0.5 w-9 bg-[#00d4aa]" />

          <h2 className="mt-6 font-serif text-4xl font-semibold text-[#e8edf2] md:text-5xl">
            {"Things I've built."}
          </h2>
        </div>

        {/* Project cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex min-h-[260px] flex-col rounded-md border border-[#1a2a35] bg-[#0d1319]/90 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#00d4aa]/50 sm:p-9"
            >
              {/* Year and status */}
              <div className="flex items-start justify-between gap-4">
                <p className="font-mono text-sm text-[#55748c]">
                  {project.year}
                </p>

                <span
                  className={`rounded border px-3 py-1 font-mono text-xs ${getStatusColor(project.status)}`}
                >
                  {project.status}
                </span>
              </div>

              {/* Project information */}
              <div className="mt-3">
                <h3 className="font-serif text-2xl font-semibold text-[#e8edf2]">
                  {project.title}
                </h3>

                <p className="mt-6 text-base leading-7 text-[#55748c]">
                  {project.description}
                </p>
              </div>

              {/* Technologies and link */}
              <div className="mt-auto flex flex-col gap-5 pt-8 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex flex-wrap gap-x-3 gap-y-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="font-mono text-xs text-[#3f5d73]"
                    >
                      #{technology}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  aria-label={`View ${project.title}`}
                  className="inline-flex items-center gap-2 font-mono text-sm text-[#55748c] transition-colors hover:text-[#00d4aa]"
                >
                  view
                  <MoveRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub link */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://github.com/tuhinmohammed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded border border-[#1a2a35] px-7 py-3 font-mono text-sm text-[#55748c] transition-colors hover:border-[#00d4aa] hover:text-[#00d4aa]"
          >
            more on GitHub
            <MoveRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
