"use client";

import { useState } from "react";
import { BRAND, waLink } from "@/lib/site";

const LINKS = [
  { href: "#paket", label: "PAKET" },
  { href: "#portfolio", label: "PORTFOLIO" },
  { href: "#cara-kerja", label: "CARA KERJA" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-black bg-[#F5F5F0]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-2">
          <span className="brutal-sm bg-black px-2 py-1 font-display text-lg font-bold text-white">
            {BRAND}
          </span>
          <span className="hidden bg-[#FFDE1A] px-2 py-0.5 text-xs font-bold sm:inline-block brutal-sm">
            UNTUK UMKM
          </span>
        </a>
        <nav className="hidden items-center gap-5 text-sm font-bold md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:underline underline-offset-4">
              {l.label}
            </a>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-btn bg-[#FFDE1A] px-4 py-2 font-display font-bold"
          >
            CHAT JASANIN ↗
          </a>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="brutal-sm bg-white px-3 py-1.5 font-bold md:hidden"
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t-[3px] border-black bg-white px-4 py-3 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-2 border-black bg-[#F5F5F0] px-3 py-2 font-bold"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-btn mt-1 bg-[#FFDE1A] px-3 py-2 text-center font-display font-bold"
          >
            CHAT JASANIN ↗
          </a>
        </nav>
      )}
    </header>
  );
}
