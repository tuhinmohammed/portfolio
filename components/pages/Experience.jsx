import { CircleDot } from "lucide-react";
import { experience } from "@/data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="hero-grid scroll-mt-20 bg-[#080d12] px-6 py-24 sm:px-10 lg:px-[7.5%] lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00d4aa]">
            // 04 Experience
          </p>

          <hr
            aria-hidden="true"
            className="mt-4 w-9 border-0 border-t-2 border-[#00d4aa]"
          />

          <h2 className="mt-6 font-serif text-4xl font-semibold text-[#e8edf2] md:text-5xl">
            {"Where I've been."}
          </h2>
        </div>

        {/* Experience timeline */}
        <div className="mt-14 border-l border-[#1a2a35]">
          <div className="space-y-8">
            {experience.map((item) => (
              <article key={item.id} className="relative ml-8 sm:ml-10">
                {/* Timeline marker */}
                <CircleDot
                  aria-hidden="true"
                  size={18}
                  strokeWidth={2.5}
                  className="absolute -left-[41px] top-6 text-[#00d4aa] sm:-left-[49px]"
                />

                {/* Experience card */}
                <div className="rounded-sm border border-[#1a2a35] bg-[#0f1419] p-6 transition-colors duration-300 hover:border-[#00d4aa]/40 sm:p-7">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    {/* Position and company */}
                    <div>
                      <h3 className="text-lg font-semibold text-[#e8edf2]">
                        {item.title}
                      </h3>

                      <p className="mt-1 font-mono text-sm text-[#00d4aa]">
                        {item.company}
                      </p>
                    </div>

                    {/* Duration */}
                    <p className="shrink-0 font-mono text-xs tracking-[0.06em] text-[#55748c] md:pt-1">
                      {item.period}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-5 max-w-5xl text-sm leading-7 text-[#55748c] sm:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
