import type { Metadata } from "next";
import ServicesGrid from "@/components/ServicesGrid";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Tous nos diagnostics immobiliers | Diagnorm",
  description:
    "DPE, amiante, plomb, électricité, gaz, termites, état parasitaire, mesurages Loi Carrez et Loi Boutin : découvrez tous les diagnostics réalisés par Diagnorm.",
};

export default function DiagnosticsPage() {
  return (
    <>
      <section className="border-b border-navy-100 bg-mist">
        <div className="mx-auto max-w-3xl px-5 py-14 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-600">
            Nos diagnostics
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-navy-900 md:text-4xl">
            Tous les diagnostics immobiliers pour la vente et la location
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-navy-600">
            Diagnorm réalise l'ensemble des diagnostics obligatoires et des mesurages
            réglementaires, avec un rapport clair remis rapidement après l'intervention.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-16">
        <ServicesGrid />
      </section>

      <CTA />
    </>
  );
}
