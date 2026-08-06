import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Diagnorm",
  description: "Mentions légales du site Diagnorm, diagnostiqueur immobilier.",
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-display text-3xl font-bold text-navy-900">
        Mentions légales
      </h1>

      <div className="prose-navy mt-8 space-y-6 text-sm leading-relaxed text-navy-700">
        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            Éditeur du site
          </h2>

          <p className="mt-2">
            <strong>Diagnorm</strong> — SASU
            <br />
            Siège social : 10 rue des Guillerands, 95110 Sannois
            <br />
            SIRET : 106 677 792 00017
            <br />
            Code APE : 71.20B
            <br />
            Activité : Analyses, essais et inspections techniques
            <br />
            E-mail : contact@diagnorm.fr
            <br />
            Téléphone : 06 02 12 71 43
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            Certifications professionnelles
          </h2>

          <p className="mt-2">
            Diagnorm réalise les diagnostics immobiliers conformément à la réglementation
            en vigueur. Les certifications professionnelles et l'assurance responsabilité
            civile professionnelle sont détenues conformément aux obligations légales
            applicables à cette activité.  
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            Hébergement
          </h2>

          <p className="mt-2">
            Le site est hébergé par <strong>Vercel Inc.</strong>, 340 S Lemon
            Ave #4133, Walnut, CA 91789, États-Unis.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            Propriété intellectuelle
          </h2>

          <p className="mt-2">
            L’ensemble des contenus présents sur ce site, notamment les textes,
            images, illustrations, logos, icônes et éléments graphiques, est la
            propriété de Diagnorm, sauf mention contraire.
          </p>

          <p className="mt-2">
            Toute reproduction, représentation, modification, publication,
            adaptation ou exploitation, totale ou partielle, est interdite
            sans autorisation écrite préalable de Diagnorm.
          </p>
        </div>
      </div>
    </section>
  );
}