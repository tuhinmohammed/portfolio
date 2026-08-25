import { skillCategories } from "@/data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="hero-grid scroll-mt-20 bg-[#080d12] px-6 py-24 sm:px-10 lg:px-[7.5%] lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00d4aa]">// 02 Skills</p>

          <hr
            aria-hidden="true"
            className="mt-4 w-9 border-0 border-t-2 border-[#00d4aa]"
          />

          <h2 className="mt-6 font-serif text-4xl font-semibold text-[#e8edf2] md:text-5xl">
            My toolkit.
          </h2>
        </div>

        {/* Skill categories */}
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skillCategories.map((category) => (
            <div key={category.id}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#00d4aa]">
                {category.title}
              </h3>

              <ul className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-sm border border-[#1a2a35] bg-[#0d1319] px-3 py-1.5 font-mono text-xs text-[#8fa3b8] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#00d4aa]/60 hover:text-[#00d4aa]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;