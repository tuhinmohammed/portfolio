import Image from "next/image";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#14212a] bg-[#080d12]">
      <nav className="relative flex h-[66px] items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" aria-label="Go to home">
          <Image
            className="h-30 w-auto object-contain"
            src={assets.name_icon}
            alt="Mohammed Tuhin logo"
            priority
          />
        </a>

        {/* Navigation links */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex lg:gap-10">
          <a
            href="#about"
            className="font-mono text-sm tracking-[0.16em] text-white transition-colors hover:text-[#00d4aa]"
          >
            about
          </a>

          <a
            href="#projects"
            className="font-mono text-sm tracking-[0.16em] text-[#607585] transition-colors hover:text-[#00d4aa]"
          >
            projects
          </a>

          <a
            href="#skills"
            className="font-mono text-sm tracking-[0.16em] text-[#607585] transition-colors hover:text-[#00d4aa]"
          >
            skills
          </a>

          <a
            href="#experience"
            className="font-mono text-sm tracking-[0.16em] text-[#607585] transition-colors hover:text-[#00d4aa]"
          >
            experience
          </a>

          <a
            href="#contact"
            className="font-mono text-sm tracking-[0.16em] text-[#607585] transition-colors hover:text-[#00d4aa]"
          >
            contact
          </a>
        </div>

        {/* Resume button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-[#00d4aa] px-5 py-2 font-mono text-sm tracking-wider text-[#00d4aa] transition-colors hover:bg-[#00d4aa] hover:text-[#080d12]"
        >
          resume.pdf
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
