"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-sm font-semibold tracking-wide text-white"
        >
          {profile.name}
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-violet-400 hover:bg-violet-400/10 md:inline-flex"
        >
          Hire Me
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-violet-400 hover:bg-white/5 md:hidden"
        >
          <span className="text-xl leading-none">{isOpen ? "×" : "☰"}</span>
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-black/90 px-5 py-4 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <a
              href={`mailto:${profile.email}`}
              onClick={closeMenu}
              className="mt-2 rounded-2xl bg-violet-400 px-4 py-3 text-center text-sm font-semibold text-black transition hover:bg-violet-300"
            >
              Hire Me
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}