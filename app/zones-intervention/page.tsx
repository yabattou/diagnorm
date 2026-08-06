import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import {
  departements,
  villesPrincipales,
  zoneIntervention,
} from "@/data/zones";

export const metadata: Metadata = {
  title: "Diagnostic immobilier en Île-de-France | DIAGNORM",
  description:
    "DIAGNORM intervient dans toute l'Île-de-France pour vos diagnostics immobiliers : Paris, Val-d'Oise, Hauts-de-Seine, Yvelines, Essonne, Seine-et-Marne, Seine-Saint-Denis et Val-de-Marne.",
};

export default function ZonesInterventionPage() {
  return (
    <>
      <section className="border-b border-navy-100 bg-mist">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-600">
            Zones d'intervention
          </p>

          <h1 className="mt-3 font-display text-3xl font-bold text-navy-900 md:text-4xl">
            DIAGNORM intervient dans toute l’Île-de-France
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-navy-600">
            {zoneIntervention.description}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/devis"
              className="rounded-md bg-teal-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
            >
              Demander un devis
            </Link>

            <Link
              href="/contact"
              className="rounded-md border border-navy-200 bg-white px-6 py-3 text-sm font-semibold text-navy-900 transition hover:border-teal-400"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-600">
            Territoire couvert
          </p>

          <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
            Les 8 départements franciliens
          </h2>

          <p className="mt-4 text-navy-600">
            Nous nous déplaçons sur rendez-vous dans l’ensemble de la région,
            aussi bien à Paris qu’en petite et grande couronne.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {departements.map((departement) => (
            <div
              key={departement.code}
              className="rounded-card border border-navy-100 bg-white p-6 text-center shadow-card transition hover:-translate-y-1 hover:border-teal-300"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 font-display text-lg font-bold text-teal-700">
                {departement.code}
              </div>

              <h3 className="mt-4 font-display text-base font-semibold text-navy-900">
                {departement.nom}
              </h3>

              <p className="mt-2 text-sm text-navy-600">
                Intervention pour la vente, la location et la rénovation.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="mx-auto max-w-content px-5">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-600">
                Intervention rapide
              </p>

              <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
                Une couverture régionale depuis Sannois
              </h2>

              <p className="mt-4 leading-relaxed text-navy-600">
                Basée à Sannois dans le Val-d’Oise, DIAGNORM intervient dans
                l’ensemble de l’Île-de-France. Nous organisons les rendez-vous
                selon la localisation du bien et les disponibilités afin de
                proposer une intervention rapide et efficace.
              </p>

              <p className="mt-4 leading-relaxed text-navy-600">
                Vous pouvez nous solliciter pour un DPE, un diagnostic amiante,
                plomb, gaz, électricité, termites, ERP, Loi Carrez, Loi Boutin
                ou un état parasitaire.
              </p>
            </div>

            <div className="rounded-card border border-navy-100 bg-white p-7 shadow-card">
              <h2 className="font-display text-xl font-bold text-navy-900">
                Quelques villes desservies
              </h2>

              <div className="mt-5 flex flex-wrap gap-2">
                {villesPrincipales.map((ville) => (
                  <span
                    key={ville}
                    className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 text-sm text-navy-700"
                  >
                    {ville}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm leading-relaxed text-navy-600">
                Cette liste est indicative. Même si votre commune n’apparaît
                pas, DIAGNORM peut intervenir partout en Île-de-France.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-16">
        <div className="rounded-card bg-navy-900 px-6 py-10 text-center md:px-12">
          <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
            Votre bien se situe en Île-de-France ?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-navy-200">
            Transmettez-nous l’adresse du bien et les diagnostics souhaités.
            Nous vous confirmerons rapidement nos disponibilités et vous
            adresserons un devis personnalisé.
          </p>

          <Link
            href="/devis"
            className="mt-7 inline-block rounded-md bg-teal-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
          >
            Obtenir mon devis
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}