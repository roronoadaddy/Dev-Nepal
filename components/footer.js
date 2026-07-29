import { Mail } from "lucide-react";

import Logo from "./logo"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Profiles", href: "/profiles" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black bg-white px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <Logo className="h-7 w-auto text-black" />
          <p className="max-w-55 text-xs text-black/50">
            The easiest way for Nepali developers to showcase their work and
            get hired.
          </p>
        </div>

        <nav className="flex flex-col items-center gap-2 sm:items-start">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-black/70 transition-colors hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:hello@devnepal.com"
          className="flex items-center gap-2 text-sm text-black/70 transition-colors hover:text-black"
        >
          <Mail className="text-[#E8483C]" size={16} />
          hello@devnepal.com
        </a>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-black/10 pt-6 text-center text-xs text-black/40">
        © {year} DevNepal. Built in Nepal.
      </div>
    </footer>
  );
}