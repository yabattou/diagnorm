import Link from "next/link";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-navy-900 text-navy-100">
      <div className="mx-auto grid max-w-content gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-teal-500 font-display text-sm font-bold text-white">
              D
            </span>
            <span className="font-display text-base font-bold text-white">Diagnorm</span>
          </div>
          <p className="text-sm leading-relaxed text-navy-300">
            Diagnostics immobiliers : DPE, amiante, ERP, plomb,
            électricité, gaz, termites et mesurages réglementaires.
          </p>
        </div>

        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-teal-400">
            Services
          </p>
          <ul className="space-y-2 text-sm text-navy-300">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/diagnostics/${s.slug}`} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-teal-400">
            Diagnorm
          </p>
          <ul className="space-y-2 text-sm text-navy-300">
            <li>
              <Link href="/a-propos" className="hover:text-white">À propos</Link>
            </li>
            <li>
              <Link href="/zones-intervention" className="hover:text-white">Zones d'intervention</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </li>
            <li>
              <Link href="/devis" className="hover:text-white">Demander un devis</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-teal-400">
            Informations légales
          </p>
          <ul className="space-y-2 text-sm text-navy-300">
            <li>
              <Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link>
            </li>
            <li>
              <Link href="/politique-confidentialite" className="hover:text-white">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-800 px-5 py-5 text-center text-xs text-navy-400">
        © {new Date().getFullYear()} Diagnorm — Diagnostiqueur immobilier certifié. Tous droits réservés.
      </div>
    </footer>
  );
}
