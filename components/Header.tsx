"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/data/services";
import Image from "next/image";
const mainNav = [
  { label: "Accueil", href: "/" },
  { label: "Zones d'intervention", href: "/zones-intervention" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [diagOpen, setDiagOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
  <Image
    src="/logo.png"
    alt="Diagnorm"
    width={180}
    height={60}
    priority
  />
</Link>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-7 md:flex">
          <Link href="/" className="text-sm font-medium text-navy-800 hover:text-teal-600">
            Accueil
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setDiagOpen(true)}
            onMouseLeave={() => setDiagOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-navy-800 hover:text-teal-600">
              Diagnostics
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            {diagOpen && (
              <div className="absolute left-0 top-full w-64 rounded-card border border-navy-100 bg-white p-2 shadow-card">
                <Link
                  href="/diagnostics"
                  className="block rounded px-3 py-2 text-sm font-semibold text-navy-800 hover:bg-mist"
                >
                  Tous les diagnostics
                </Link>
                <div className="my-1 h-px bg-navy-100" />
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/diagnostics/${s.slug}`}
                    className="block rounded px-3 py-2 text-sm text-navy-700 hover:bg-mist hover:text-teal-700"
                  >
                    {s.shortTitle}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {mainNav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy-800 hover:text-teal-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/devis"
            className="rounded-md bg-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-600"
          >
            Demander un devis
          </Link>
        </div>

        {/* Bouton menu mobile */}
        <button
          aria-label="Ouvrir le menu"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-navy-100 md:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
            <path d="M0 1h18M0 7h18M0 13h18" stroke="#0f2a43" strokeWidth="1.6" />
          </svg>
        </button>
      </div>

      {/* Navigation mobile */}
      {open && (
        <nav className="border-t border-navy-100 bg-white px-5 py-4 md:hidden">
          <Link href="/" className="block py-2 text-sm font-medium text-navy-800" onClick={() => setOpen(false)}>
            Accueil
          </Link>
          <p className="pt-2 text-xs font-semibold uppercase tracking-wide text-navy-400">
            Diagnostics
          </p>
          <Link href="/diagnostics" className="block py-2 text-sm text-navy-800" onClick={() => setOpen(false)}>
            Tous les diagnostics
          </Link>
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/diagnostics/${s.slug}`}
              className="block py-2 pl-3 text-sm text-navy-700"
              onClick={() => setOpen(false)}
            >
              {s.shortTitle}
            </Link>
          ))}
          <div className="my-2 h-px bg-navy-100" />
          {mainNav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-sm font-medium text-navy-800"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/devis"
            className="mt-3 block rounded-md bg-teal-500 px-5 py-3 text-center text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Demander un devis
          </Link>
        </nav>
      )}
    </header>
  );
}
