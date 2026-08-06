import Link from "next/link";
import CornerFrame from "./CornerFrame";

const trustPoints = [
  "Devis rapide",
  "Intervention dans toute l’Île-de-France",
  "Rapport clair",
  "Accompagnement vente et location",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-content px-5 py-20 md:py-28">
        <div className="relative mx-auto max-w-3xl text-center">
          <CornerFrame className="absolute -left-6 -top-6 h-16 w-16 md:h-20 md:w-20" />
          <CornerFrame className="absolute -bottom-6 -right-6 h-16 w-16 rotate-180 md:h-20 md:w-20" />

          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-teal-400">
            Diagnostiqueur immobilier certifié
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
            Diagnostics immobiliers 
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy-200 md:text-lg">
            DPE, amiante, plomb, électricité, ERP, gaz, termites, état parasitaire et mesurages
            Loi Carrez / Loi Boutin. Demandez votre devis rapidement en ligne.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/devis"
              className="w-full rounded-md bg-teal-500 px-7 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-teal-600 sm:w-auto"
            >
              Demander un devis
            </Link>
            <a
              href="tel:+33602127143"
              className="w-full rounded-md border border-navy-600 bg-navy-800/60 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-navy-800 sm:w-auto"
            >
              Appeler maintenant
            </a>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="rounded-md border border-navy-700 bg-navy-800/50 px-3 py-3 text-xs font-medium text-navy-100"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
