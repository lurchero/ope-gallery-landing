"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Gallery", href: "#gallery" },
  { label: "Drops", href: "#drops" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 transition-all ${
        scrolled
          ? "bg-primary backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.05)]"
          : "bg-primary/95 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto max-w-[1200px] px-5 md:px-6 flex items-center justify-between h-14 md:h-16">
        <a href="#" className="text-lg font-semibold text-secondary">
          OPE Gallery
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.18em] font-medium text-neutral-400 hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 w-6 h-6"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-6 h-px bg-secondary" />
          <span className="block w-6 h-px bg-secondary" />
          <span className="block w-6 h-px bg-secondary" />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-primary flex flex-col items-center justify-center transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="absolute top-4 right-5 w-6 h-6 flex items-center justify-center"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <span className="block w-6 h-px bg-secondary rotate-45 absolute" />
          <span className="block w-6 h-px bg-secondary -rotate-45 absolute" />
        </button>
        <div className="flex flex-col items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xl font-medium text-secondary hover:text-accent transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
