import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Diagnorm | Diagnostic immobilier",
  description:
    "Diagnorm réalise vos diagnostics immobiliers (DPE, amiante, plomb, électricité, gaz, termites, mesurages Loi Carrez et Loi Boutin) pour la vente et la location. Devis rapide en ligne.",
};

const besoins = [
  {
    title: "Vente immobilière",
    desc: "Un dossier de diagnostics complet pour sécuriser votre transaction.",
  },
  {
    title: "Location immobilière",
    desc: "Les diagnostics obligatoires pour mettre votre bien en location en toute conformité.",
  },
  {
    title: "Mesurage de surface",
    desc: "Loi Carrez et Loi Boutin, mesurées avec précision.",
  },
  {
    title: "Diagnostic obligatoire",
    desc: "DPE, amiante, plomb, électricité, gaz selon l'âge et la nature du bien.",
  },
  {
    title: "Recherche de parasites",
    desc: "Termites et état parasitaire dans les zones concernées.",
  },
  {
    title: "Dossier de diagnostic technique",
    desc: "Un DDT complet, prêt à joindre à votre acte de vente ou bail.",
  },
];

const pourquoi = [
  "Service clair et professionnel",
  "Devis rapide",
  "Accompagnement simple",
  "Intervention dans toute l’Île-de-France",
  "Explications compréhensibles",
  "Formulaire de demande simple",
];

const etapes = [
  { title: "Demande", desc: "Le client remplit le formulaire de devis en ligne." },
  { title: "Analyse", desc: "Diagnorm analyse la demande et les diagnostics nécessaires." },
  { title: "Contact", desc: "Diagnorm recontacte le client pour confirmer le rendez-vous." },
  { title: "Intervention", desc: "Intervention sur place, au jour et à l'heure convenus." },
  { title: "Rapport", desc: "Envoi du rapport complet, clair et exploitable." },
];

const departements = [
  ["75", "Paris"],
  ["77", "Seine-et-Marne"],
  ["78", "Yvelines"],
  ["91", "Essonne"],
  ["92", "Hauts-de-Seine"],
  ["93", "Seine-Saint-Denis"],
  ["94", "Val-de-Marne"],
  ["95", "Val-d’Oise"],
];

const avisGoogle = [
  {
    auteur: "Yaffa Abitbol",
    note: 5,
    texte:
      "Bonjour, très professionnel et très disponible. Je le recommande les yeux fermés. Merci beaucoup pour la prestation.",
  },
  {
    auteur: "Kaddani Samya",
    note: 5,
    texte: "Très professionnel, RAS. Je recommande, service au top.",
  },
  {
    auteur: "Solène Rithie",
    note: 5,
    texte: "Réactif, disponible, professionnel.",
  },
  {
    auteur: "Ayet Merdji",
    note: 4,
    texte:
      "Je conseille vivement les services de Diagnorm. Le technicien a beaucoup d’expérience, la prise de rendez-vous a été très rapide et les rapports ont été transmis sous 24 h comme promis. Je recommande.",
  },
  {
    auteur: "Jean-Yves Jacquinot",
    note: 5,
    texte:
      "Excellent professionnel, très sérieux, ponctuel et sympathique.",
  },
];

const lienGoogle = "https://share.google/YXyDAaSwII50GhG3A";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Services */}
      <section className="mx-auto max-w-content px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-600">
            Nos diagnostics
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
            Tous vos diagnostics immobiliers, un seul interlocuteur
          </h2>
          <p className="mt-3 text-navy-600">
            DIAGNORM intervient dans toute l’Île-de-France pour réaliser les
            diagnostics obligatoires liés à la vente, à la location et à la
            rénovation, avec un rapport clair remis rapidement.
          </p>
        </div>
        <div className="mt-12">
          <ServicesGrid />
        </div>
      </section>

      {/* Besoins clients */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-content px-5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-navy-900">
              Diagnorm vous accompagne à chaque étape
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {besoins.map((besoin) => (
              <div
                key={besoin.title}
                className="rounded-card border border-navy-100 bg-white p-6"
              >
                <h3 className="font-display text-base font-semibold text-navy-900">
                  {besoin.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {besoin.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi Diagnorm */}
      <section className="mx-auto max-w-content px-5 py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-600">
              Pourquoi Diagnorm
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
              Un service pensé pour rassurer, du premier contact au rapport final
            </h2>
            <p className="mt-4 text-navy-600">
              Diagnorm simplifie chaque étape de votre diagnostic immobilier,
              avec des explications claires et un accompagnement de proximité.
            </p>
            <Link
              href="/devis"
              className="mt-6 inline-block rounded-md bg-teal-500 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-600"
            >
              Demander un devis
            </Link>
          </div>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {pourquoi.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-card border border-navy-100 bg-white p-4 text-sm text-navy-800"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                    <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Zone d’intervention */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-content px-5">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-600">
                Zone d’intervention
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
                Nous intervenons dans toute l’Île-de-France
              </h2>
              <p className="mt-4 leading-relaxed text-navy-600">
                Depuis Sannois, DIAGNORM se déplace dans les huit départements
                franciliens pour réaliser vos diagnostics immobiliers dans le
                cadre d’une vente, d’une location ou d’une rénovation.
              </p>
              <p className="mt-4 text-navy-600">
                Paris · Seine-et-Marne · Yvelines · Essonne · Hauts-de-Seine ·
                Seine-Saint-Denis · Val-de-Marne · Val-d’Oise
              </p>
              <Link
                href="/zones-intervention"
                className="mt-6 inline-block rounded-md bg-teal-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
              >
                Voir notre zone d’intervention
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {departements.map(([code, nom]) => (
                <div
                  key={code}
                  className="rounded-card border border-navy-100 bg-white p-4 text-center shadow-card"
                >
                  <div className="font-display text-xl font-bold text-teal-600">
                    {code}
                  </div>
                  <div className="mt-1 text-sm text-navy-700">{nom}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Étapes */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-content px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-400">
              Le parcours client
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white">
              De la demande au rapport, en 5 étapes
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {etapes.map((etape, index) => (
              <div
                key={etape.title}
                className="rounded-card border border-navy-700 bg-navy-800/60 p-5"
              >
                <span className="font-mono text-xs text-teal-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-base font-semibold text-white">
                  {etape.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-300">
                  {etape.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis Google : défilement à l’emplacement de l’ancienne section Avis clients */}
      <section className="overflow-hidden bg-mist py-20">
        <div className="mx-auto max-w-content px-5">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-600">
              Avis clients Google
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
              La satisfaction de nos clients au cœur de notre service
            </h2>
            <a
              href={lienGoogle}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-teal-700 underline"
            >
              Voir tous les avis sur Google
            </a>
          </div>

          <div className="avis-viewport overflow-hidden">
            <div className="avis-track flex w-max gap-5">
              {[...avisGoogle, ...avisGoogle].map((avis, index) => (
                <article
                  key={`${avis.auteur}-${index}`}
                  aria-hidden={index >= avisGoogle.length}
                  className="w-[320px] shrink-0 rounded-card border border-navy-100 bg-white p-6 shadow-card"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-navy-900">{avis.auteur}</p>
                    <span
                      className="whitespace-nowrap text-amber-500"
                      aria-label={`${avis.note} étoiles sur 5`}
                    >
                      {"★".repeat(avis.note)}
                      {"☆".repeat(5 - avis.note)}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-navy-600">
                    “{avis.texte}”
                  </p>
                  <p className="mt-4 text-xs text-navy-400">
                    Avis publié sur Google
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes defilement-avis {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .avis-track {
            animation: defilement-avis 45s linear infinite;
          }
          .avis-viewport:hover .avis-track {
            animation-play-state: paused;
          }
          @media (prefers-reduced-motion: reduce) {
            .avis-track { animation: none; }
            .avis-viewport { overflow-x: auto; }
          }
        `}</style>
      </section>

      <CTA />

      {/* Partenariat ImoDiag : placé tout en bas de la page */}
      <section className="bg-mist py-16">
        <div className="mx-auto max-w-content px-5 text-center">
          <h2 className="font-display text-3xl font-bold text-navy-900">
            Partenaire d’ImoDiag
          </h2>
          <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-navy-600">
            Nous collaborons avec ImoDiag (
            <a
              href="https://imodiag.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 underline"
            >
              imodiag.fr
            </a>
            ), un service de mise en relation entre particuliers et
            diagnostiqueurs immobiliers. Ce partenariat vous permet de trouver
            un professionnel pour vos diagnostics et de faciliter l’organisation
            de votre rendez-vous.
          </p>
          <p className="mt-4 text-navy-600">
            Découvrez ImoDiag sur{" "}
            <a
              href="https://imodiag.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 underline"
            >
              imodiag.fr
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
