import Image from "next/image";
import { assets } from "@/assets/assets";

const About = () => {
  return (
    <section
      id="about"
      className="hero-grid flex min-h-screen items-center px-6 py-24 sm:px-10 lg:px-[7.5%] lg:py-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <div>
          <p className="font-mono text-xs  tracking-[0.25em] text-[#00d4aa]">
            // 01 About
          </p>

          <div className="mt-4 h-0.5 w-9 bg-[#00d4aa]" />

          <h2 className="mt-6 font-serif text-4xl font-semibold text-[#e8edf2] md:text-5xl">
            Nice to meet you.
          </h2>
        </div>

        {/* About content */}
        <div className="mt-14 grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
          {/* Text column */}
          <div className="max-w-2xl">
            <div className="space-y-6 text-base leading-8 text-[#8fa3b8] sm:text-lg">
              <p>
                I’m a fourth-year Computer Science student at the{" "}
                <span className="text-[#e8edf2]">
                  University of Manitoba
                </span>
                , drawn to the intersection of{" "}
                <span className="text-[#00d4aa]">
                  software engineering, data science, and Machine Learning
                </span>
                .
              </p>

              <p>
                My focus is on building thoughtful, reliable software and
                developing{" "}
                <span className="text-[#00d4aa]">
                  data science and AI models
                </span>{" "}
                that turn complex data into meaningful insight. I enjoy the
                entire process—from breaking down an open-ended problem and
                designing a clean solution to experimenting with models and
                shaping the result into something people can genuinely use.
              </p>

              <p>
                Alongside my projects, I’m working through my{" "}
                <span className="text-[#00d4aa]">LeetCode journey</span> to
                strengthen my foundations in algorithms, data structures, and
                efficient problem-solving. Away from the screen, you’ll usually
                find me playing soccer, travelling, discovering new foods and
                cultures, or capturing places and moments through photography.
              </p>
            </div>

            {/* Social links */}
            <div className="mt-9 flex flex-wrap items-center gap-6">
              {/* GitHub */}
              <a
                href="https://github.com/tuhinmohammed"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-mono text-sm text-[#55748c] transition-colors hover:text-[#00d4aa]"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded border border-[#1a2a35] font-mono text-[10px] tracking-wider transition-colors group-hover:border-[#00d4aa]">
                  GH
                </span>

                GitHub
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mohammedtuhin"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-mono text-sm text-[#55748c] transition-colors hover:text-[#00d4aa]"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded border border-[#1a2a35] font-mono text-[10px] tracking-wider transition-colors group-hover:border-[#00d4aa]">
                  LI
                </span>

                LinkedIn
              </a>

              {/* Email */}
              <a
                href="mailto:memohammedtuhin@gmail.com"
                className="group inline-flex items-center gap-2 font-mono text-sm text-[#55748c] transition-colors hover:text-[#00d4aa]"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded border border-[#1a2a35] font-mono text-[10px] tracking-wider transition-colors group-hover:border-[#00d4aa]">
                  EM
                </span>

                Email
              </a>
            </div>
          </div>

          {/* Image column */}
          <div className="relative mx-auto w-full max-w-[320px] lg:mx-0 lg:justify-self-end">
            {/* Top-left decoration */}
            <span
              aria-hidden="true"
              className="absolute -left-4 -top-4 h-16 w-16 border-l-2 border-t-2 border-[#00d4aa]/60 sm:-left-10"
            />

            {/* Bottom-right decoration */}
            <span
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 h-16 w-16 border-b-2 border-r-2 border-[#00d4aa]/60 sm:-right-10"
            />

            <Image
              src={assets.profile_icon}
              alt="Portrait of Mohammed Tuhin"
              className="relative z-10 aspect-[3/4] h-auto w-full rounded-sm object-cover"
              sizes="(max-width: 1024px) 80vw, 320px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;