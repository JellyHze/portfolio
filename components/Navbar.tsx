"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { profile } from "@/data/portfolio";

const navItems = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    isHomePage ? "home" : ""
  );

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isHomePage) return;

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )[0]?.target.id;

        if (current) {
          setActiveSection(current);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isHomePage]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">

        <Link
          href="/#home"
          onClick={closeMenu}
          className="font-semibold tracking-wide text-white"
        >
          <span className="hidden sm:block">
            {profile.name}
          </span>

          <span className="block sm:hidden">
            Kadek Dwiyana
          </span>
        </Link>


        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const active = activeSection === item.id;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-full px-4 py-2 text-sm transition",
                  active
                    ? "bg-white/10 text-white"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </div>


        <div className="flex items-center gap-3">

          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-violet-400 hover:bg-violet-400/10 md:inline-flex"
          >
            Hire Me
          </a>


          <button
            type="button"
            aria-label={
              isOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-violet-400 hover:bg-white/5 md:hidden"
          >
            <span className="text-xl">
              {isOpen ? "×" : "☰"}
            </span>
          </button>

        </div>

      </nav>


      <div
        className={[
          "overflow-hidden border-t border-white/10 bg-black/90 backdrop-blur-xl transition-all duration-300 md:hidden",
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0",
        ].join(" ")}
      >

        <div className="flex flex-col gap-2 px-5 py-4">

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
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

    </header>
  );
}