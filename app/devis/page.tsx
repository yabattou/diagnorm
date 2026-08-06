import type { Metadata } from "next";
import DevisForm from "@/components/DevisForm";
import { getServiceBySlug } from "@/data/services";

export const metadata: Metadata = {
  title: "Devis diagnostic immobilier | Diagnorm",
  description:
    "Demandez votre devis de diagnostic immobilier en ligne : DPE, amiante, plomb, électricité, gaz, termites, mesurages. Réponse rapide sous 24h ouvrées.",
};

export default function DevisPage({
  searchParams,
}: {
  searchParams: { diagnostic?: string };
}) {
  const preselected = searchParams.diagnostic
    ? getServiceBySlug(searchParams.diagnostic)
    : undefined;
  const defaultDiagnostic = preselected
    ? preselected.slug === "loi-carrez"
      ? "Loi Carrez"
      : preselected.slug === "loi-boutin"
      ? "Loi Boutin"
      : preselected.shortTitle
    : undefined;

  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-600">
          Demande de devis
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold text-navy-900 md:text-4xl">
          Obtenez votre devis de diagnostic immobilier
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-navy-600">
          Remplissez le formulaire ci-dessous : Diagnorm vous recontacte rapidement avec un
          devis adapté à votre bien et à votre projet.
        </p>
      </div>

      <div className="mt-10 rounded-card border border-navy-100 bg-white p-6 shadow-card sm:p-9">
        <DevisForm defaultDiagnostic={defaultDiagnostic} />
      </div>
    </section>
  );
}
