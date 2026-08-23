function Hero() {
  return (
    <section
      id="home"
      className="hero-grid min-h-[calc(100vh-66px)] px-6 sm:px-10 lg:px-[7.5%]"
    >
      <div className="mx-auto flex min-h-[calc(100vh-66px)] max-w-7xl flex-col justify-center py-20">
        {/* University information */}
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#55748c] sm:text-sm md:text-base">
          University of Manitoba
          <span className="mx-2">•</span>
          Computer Science
        </p>

        {/* Main heading */}
        <h1 className="mt-7 font-serif text-5xl font-semibold leading-[0.92] text-[#e8edf2] sm:text-6xl md:text-7xl lg:text-8xl">
          Mohammed Tuhin
          <span className="mt-2 block font-normal italic text-[#00d4aa]">
            builds things.
            <span
              aria-hidden="true"
              className="cursor-blink ml-2 inline-block font-light not-italic"
            >
              /
            </span>
          </span>
        </h1>

        {/* Description */}
        <p className="mt-7 max-w-2xl text-base leading-8 text-[#55748c] sm:text-lg">
          CS student and Data Analyst. I love to create innovative solutions to
          real-world problems.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex min-w-44 items-center justify-center rounded-md bg-[#00d4aa] px-7 py-3.5 font-semibold text-[#080d12] transition-colors hover:bg-[#00b896]"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="inline-flex min-w-44 items-center justify-center rounded-md border border-[#1a2a35] bg-transparent px-7 py-3.5 font-semibold text-[#8fa3b8] transition-colors hover:border-[#00d4aa] hover:text-[#00d4aa]"
          >
            Get in Touch
          </a>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-y-8 md:mt-20 md:grid-cols-4 md:gap-y-0">
          {/* Projects */}
          <div className="border-r border-[#1a2a35] pr-6">
            <h3 className="font-serif text-3xl italic text-white md:text-4xl">
              10<span className="text-[#00d4aa]">+</span>
            </h3>

            <p className="mt-2 font-mono text-sm tracking-wider text-[#55748c]">
              Projects
            </p>
          </div>

          {/* Internships */}
          <div className="px-6 md:border-r md:border-[#1a2a35]">
            <h3 className="font-serif text-3xl italic text-white md:text-4xl">
              1
            </h3>

            <p className="mt-2 font-mono text-sm tracking-wider text-[#55748c]">
              Internship
            </p>
          </div>

          {/* GPA */}
          <div className="border-r border-[#1a2a35] px-6">
            <h3 className="font-serif text-3xl italic text-white md:text-4xl">
              3.2
            </h3>

            <p className="mt-2 font-mono text-sm tracking-wider text-[#55748c]">
              GPA
            </p>
          </div>

          {/* Coffee */}
          <div className="pl-6">
            <h3 className="font-serif text-3xl italic text-white md:text-4xl">
              &infin;
            </h3>

            <p className="mt-2 whitespace-nowrap font-mono text-sm tracking-wider text-[#55748c]">
              Cups of Coffee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
