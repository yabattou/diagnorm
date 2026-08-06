import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Diagnorm",
  description: "Politique de confidentialité et de protection des données de Diagnorm.",
  robots: { index: false, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-display text-3xl font-bold text-navy-900">
        Politique de confidentialité
      </h1>

      <div className="prose-navy mt-8 space-y-6 text-sm leading-relaxed text-navy-700">
        <p className="rounded-md border border-teal-200 bg-teal-50 p-4 text-navy-800">
          Ce modèle doit être relu et complété (idéalement avec un professionnel du droit)
          avant mise en ligne, pour refléter précisément vos traitements de données.
        </p>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            Données collectées
          </h2>
          <p className="mt-2">
            Dans le cadre du formulaire de demande de devis, Diagnorm collecte : nom,
            prénom, téléphone, e-mail, adresse du bien, informations sur le bien (type,
            surface, année de construction), le projet (vente ou location), ainsi que les
            diagnostics souhaités et tout message complémentaire.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            Finalité du traitement
          </h2>
          <p className="mt-2">
            Ces données sont utilisées exclusivement pour traiter votre demande de devis,
            vous recontacter et, le cas échéant, organiser l'intervention de diagnostic.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            Conservation des données
          </h2>
          <p className="mt-2">
            Les données transmises via le formulaire sont conservées pendant la durée
            nécessaire au traitement de votre demande, puis archivées ou supprimées
            conformément aux obligations légales applicables aux diagnostics immobiliers.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">Vos droits</h2>
          <p className="mt-2">
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous
            disposez d'un droit d'accès, de rectification, d'effacement et d'opposition sur
            vos données personnelles. Pour exercer ces droits, contactez-nous à
            contact@diagnorm.fr.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">Cookies</h2>
          <p className="mt-2">
            Ce site n'utilise pas de cookies publicitaires. Seuls des cookies techniques
            strictement nécessaires au fonctionnement du site peuvent être déposés.
          </p>
        </div>
      </div>
    </section>
  );
}
