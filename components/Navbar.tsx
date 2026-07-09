import { profile } from "@/data/portfolio";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#home" className="text-sm font-semibold tracking-wide text-white">
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
          className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-violet-400 hover:bg-violet-400/10"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}