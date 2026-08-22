"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { assets } from "../assets/assets.js";

const navLinks = [
  { name: "about", href: "#about" },
  { name: "projects", href: "#projects" },
  { name: "skills", href: "#skills" },
  {name: "experience", href: "#experience"},
  { name: "contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((previousValue) => !previousValue);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

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

        {/* Desktop navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 xl:flex xl:gap-12">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-mono text-md tracking-[0.16em] transition-colors hover:text-[#00d4aa] ${
                index === 0 ? "text-white" : "text-[#607585]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop resume button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-md border border-[#00d4aa] px-5 py-2 font-mono text-sm tracking-wider text-[#00d4aa] transition-colors hover:bg-[#00d4aa] hover:text-[#080d12] xl:inline-flex"
        >
          resume.pdf
        </a>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="rounded-md border border-[#263641] p-2 text-[#00d4aa] transition-colors hover:border-[#00d4aa] xl:hidden"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute left-0 top-full w-full border-b border-[#14212a] bg-[#080d12] px-6 py-5 shadow-xl xl:hidden"
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="font-mono text-sm tracking-[0.16em] text-[#9aabb7] transition-colors hover:text-[#00d4aa]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 flex w-full justify-center rounded-md border border-[#00d4aa] px-5 py-3 font-mono text-sm tracking-wider text-[#00d4aa] transition-colors hover:bg-[#00d4aa] hover:text-[#080d12]"
            >
              resume.pdf
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;