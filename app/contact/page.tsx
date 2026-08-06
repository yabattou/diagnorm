import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Diagnorm, diagnostiqueur immobilier",
  description:
    "Contactez Diagnorm pour toute question sur vos diagnostics immobiliers : DPE, amiante, plomb, électricité, gaz, termites et mesurages.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-content px-5 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-600">Contact</p>
        <h1 className="mt-3 font-display text-3xl font-bold text-navy-900 md:text-4xl">
          Parlons de votre projet de diagnostic
        </h1>
        <p className="mt-3 text-navy-600">
         Une question sur un diagnostic ou un délai d’intervention ? DIAGNORM
         intervient dans toute l’Île-de-France. Contactez-nous directement ou
         utilisez le formulaire de devis pour recevoir une réponse rapide.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="rounded-card border border-navy-100 bg-white p-6 shadow-card">
          <h2 className="font-display text-base font-semibold text-navy-900">Téléphone</h2>
          <p className="mt-2 text-sm text-navy-600">Du lundi au samedi, 09h00 – 18h00.</p>
          <a href="tel:+33602127143" className="mt-3 inline-block font-semibold text-teal-600">
            06 02 12 71 43
          </a>
        </div>
        <div className="rounded-card border border-navy-100 bg-white p-6 shadow-card">
          <h2 className="font-display text-base font-semibold text-navy-900">E-mail</h2>
          <p className="mt-2 text-sm text-navy-600">Réponse sous 24h ouvrées.</p>
          <a href="mailto:contact@diagnorm.fr" className="mt-3 inline-block font-semibold text-teal-600">
            contact@diagnorm.fr
          </a>
        </div>
      </div>
      <div className="mx-auto mt-5 max-w-3xl rounded-card border border-navy-100 bg-mist p-6 text-center">
  <h2 className="font-display text-base font-semibold text-navy-900">
    Zone d’intervention
  </h2>

  <p className="mt-2 text-sm leading-relaxed text-navy-600">
    DIAGNORM intervient à Paris et dans les départements 77, 78, 91, 92,
    93, 94 et 95.
  </p>

  <Link
    href="/zones-intervention"
    className="mt-4 inline-block font-semibold text-teal-600"
  >
    Découvrir toutes nos zones d’intervention
  </Link>
</div>
      <div className="mx-auto mt-10 max-w-3xl rounded-card border border-teal-200 bg-teal-50 p-6 text-center">
        <p className="text-navy-800">
          Besoin d'un devis chiffré ? Le plus rapide est de remplir le formulaire de demande.
        </p>
        <Link
          href="/devis"
          className="mt-4 inline-block rounded-md bg-teal-500 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-600"
        >
          Demander un devis
        </Link>
      </div>
    </section>
  );
}
