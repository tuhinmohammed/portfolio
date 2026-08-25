"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { assets } from "@/assets/assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((previousState) => !previousState);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#14212a] bg-[#080d12]">
      <nav className="relative mx-auto flex h-[66px] max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" aria-label="Go to home" onClick={closeMenu}>
          <Image
            className="h-10 w-auto object-contain"
            src={assets.name_icon}
            alt="Mohammed Tuhin logo"
            priority
          />
        </a>

        {/* Desktop navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex lg:gap-10">
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

        {/* Right-side controls */}
        <div className="flex items-center gap-3">
          {/* Resume is hidden on very small screens */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md border border-[#00d4aa] px-5 py-2 font-mono text-sm tracking-wider text-[#00d4aa] transition-colors hover:bg-[#00d4aa] hover:text-[#080d12] sm:inline-flex"
          >
            resume.pdf
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#1a2a35] text-[#00d4aa] transition-colors hover:border-[#00d4aa] lg:hidden"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" size={24} />
            ) : (
              <Menu aria-hidden="true" size={24} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 top-full w-full border-b border-[#14212a] bg-[#080d12] px-6 py-5 shadow-xl lg:hidden"
        >
          <div className="flex flex-col">
            <a
              href="#about"
              onClick={closeMenu}
              className="border-b border-[#14212a] py-3 font-mono tracking-[0.16em] text-white transition-colors hover:text-[#00d4aa]"
            >
              about
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="border-b border-[#14212a] py-3 font-mono tracking-[0.16em] text-[#607585] transition-colors hover:text-[#00d4aa]"
            >
              projects
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="border-b border-[#14212a] py-3 font-mono tracking-[0.16em] text-[#607585] transition-colors hover:text-[#00d4aa]"
            >
              skills
            </a>

            <a
              href="#experience"
              onClick={closeMenu}
              className="border-b border-[#14212a] py-3 font-mono tracking-[0.16em] text-[#607585] transition-colors hover:text-[#00d4aa]"
            >
              experience
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="py-3 font-mono tracking-[0.16em] text-[#607585] transition-colors hover:text-[#00d4aa]"
            >
              contact
            </a>

            {/* Resume appears inside the menu on very small screens */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-4 inline-flex justify-center rounded-md border border-[#00d4aa] px-5 py-3 font-mono text-sm tracking-wider text-[#00d4aa] sm:hidden"
            >
              resume.pdf
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;