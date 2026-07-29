"use client"

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Profiles", href: "/profiles" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1A1A1A]/10 bg-[#FAFAF7] shadow-lg">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="group flex items-center text-[#1A1A1A]" aria-label="DevNepal home">
          <Logo className="h-8 w-auto sm:h-9" />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#1A1A1A]/60 transition-colors hover:text-[#1A1A1A]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Auth actions — visually separated from nav links */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/login"
            className="text-sm font-medium text-[#1A1A1A]/60 transition-colors hover:text-[#1A1A1A]"
          >
            Log in
          </a>
          <a
            href="/join"
            className="rounded-full border border-[#1E88E5] bg-[#1E88E5] px-5 py-2 text-sm font-medium text-white transition-colors hover:border-[#F5A623] hover:bg-[#F5A623] hover:text-[#1A1A1A]"
          >
            Join
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-[#1A1A1A] md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-[#1A1A1A]/10 bg-[#FAFAF7] md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-2 py-2.5 text-base font-medium text-[#1A1A1A]/80 hover:bg-[#1A1A1A]/5"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-3 flex flex-col gap-2 border-t border-[#1A1A1A]/10 pt-3">
              <a
                href="/login"
                onClick={() => setIsOpen(false)}
                className="rounded-md px-2 py-2.5 text-center text-base font-medium text-[#1A1A1A]/80 hover:bg-[#1A1A1A]/5"
              >
                Log in
              </a>
              <a
                href="/join"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-[#1E88E5] bg-[#1E88E5] px-5 py-2.5 text-center text-base font-medium text-white hover:border-[#F5A623] hover:bg-[#F5A623] hover:text-[#1A1A1A]"
              >
                Join
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
