import { profile } from "@/data/portfolio";

const socialLinks = [
  {
    label: "GitHub",
    href: profile.github,
  },
  {
    label: "Instagram",
    href: profile.instagram,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-white">{profile.name}</p>
          <p className="mt-2 text-sm text-zinc-400">
            © {currentYear} All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}