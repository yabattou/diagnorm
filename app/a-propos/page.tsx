import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos de Diagnorm | Diagnostics immobiliers fiables",
  description:
    "Découvrez Diagnorm, votre partenaire de confiance pour des diagnostics immobiliers précis, rapides et conformes à la réglementation.",
};

const engagements = [
  {
  title: "Toute l’Île-de-France",
  description:
    "Une intervention à Paris et dans les sept départements de petite et grande couronne.",
  },  
  {
    title: "Rapports sous 24 h*",
    description: "Des rapports complets, certifiés et transmis rapidement après l'intervention.",
  },
  {
    title: "Conformité réglementaire",
    description: "Des diagnostics réalisés avec rigueur selon la réglementation en vigueur.",
  },
  {
    title: "Accompagnement personnalisé",
    description: "Un interlocuteur disponible pour expliquer les résultats et répondre à vos questions.",
  },
];

const etapes = [
  ["01", "Demande de devis", "Vous nous transmettez les informations essentielles sur le bien et votre projet."],
  ["02", "Prise de rendez-vous", "Nous confirmons les diagnostics nécessaires et convenons d'un créneau d'intervention."],
  ["03", "Intervention", "Le diagnostiqueur réalise les contrôles et relevés nécessaires sur place."],
  ["04", "Analyse", "Les données recueillies sont vérifiées et intégrées dans des rapports clairs et conformes."],
  ["05", "Rapports sous 24 h*", "Les documents sont transmis rapidement, sous réserve de disposer de toutes les informations nécessaires."],
  ["06", "Accompagnement", "Nous restons disponibles pour vous aider à comprendre les conclusions de vos rapports."],
];

const faq = [
  {
    q: "Sous quel délai les rapports sont-ils transmis ?",
    a: "Diagnorm s'engage à transmettre les rapports sous 24 heures, sous réserve que toutes les informations nécessaires aient été fournies et que les éventuelles analyses complémentaires soient disponibles.",
  },
  {
    q: "Pour quels projets pouvez-vous intervenir ?",
    a: "Nous accompagnons les projets de vente, de location et de rénovation, aussi bien pour les particuliers que pour les professionnels de l'immobilier.",
  },
  {
    q: "Comment savoir quels diagnostics sont nécessaires ?",
    a: "Les obligations dépendent notamment de l'âge du bien, de ses installations, de sa localisation et de la nature du projet. Notre formulaire permet de recueillir ces informations afin de vous orienter.",
  },
  {
    q: "Puis-je poser des questions après réception du rapport ?",
    a: "Oui. Diagnorm reste votre interlocuteur après l'intervention afin de vous expliquer les résultats et les éventuelles recommandations.",
  },
];

export default function AProposPage() {
  return (
    <>
      <section className="bg-navy-900 py-20 text-white">
        <div className="mx-auto max-w-content px-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-400">À propos</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight md:text-5xl">
            Votre partenaire de confiance pour vos diagnostics immobiliers
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy-200">
            DIAGNORM vous accompagne pour vendre, louer et rénover en toute sérénité grâce à des expertises précises, rapides et conformes à la réglementation en vigueur.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-600">Notre engagement</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
              Des diagnostics fiables pour sécuriser chaque transaction
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-navy-700">
              <p>
                DIAGNORM vous propose des diagnostics immobiliers fiables pour vendre, louer et rénover en toute sérénité. Nous garantissons des expertises précises, rapides et conformes à la réglementation en vigueur.
              </p>
              <p>
                DIAGNORM s'engage à rendre vos rapports complets, conformes et certifiés sous 24 heures, sous réserve de disposer en amont de toutes les informations nécessaires à leur réalisation.
              </p>
              <p>
                 Basée à Sannois, DIAGNORM intervient dans toute l&apos;Île-de-France,
                à Paris comme en petite et grande couronne. Nous accompagnons les
                particuliers et les professionnels dans les huit départements
                franciliens, tout en conservant un service réactif et un interlocuteur
                unique.
               </p>
              <p>
                DIAGNORM est votre partenaire de confiance pour vos diagnostics immobiliers. Grâce à un accompagnement clair et rigoureux, vos transactions deviennent plus sereines.
              </p>
            </div>
          </div>

          <aside className="rounded-card border border-teal-100 bg-teal-50 p-7">
            <h2 className="font-display text-xl font-bold text-navy-900">Une expertise adaptée à votre projet</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-navy-700">
              {[
                "Vente immobilière",
                "Mise en location",
                "Projet de rénovation",
                "Dossier de diagnostics techniques",
                "Conseils avant transaction",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500 text-xs font-bold text-white">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="mx-auto max-w-content px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-600">Nos engagements</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">Un service rigoureux, réactif et transparent</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {engagements.map((item) => (
              <article key={item.title} className="rounded-card border border-navy-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 font-bold text-teal-700">✓</div>
                <h3 className="font-display text-lg font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{item.description}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-navy-500">* Sous réserve de la transmission de toutes les informations nécessaires à la réalisation des diagnostics.</p>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-600">Notre méthode</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">Comment se déroule une intervention ?</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {etapes.map(([numero, titre, description]) => (
            <article key={numero} className="rounded-card border border-navy-100 bg-white p-6">
              <span className="font-mono text-sm font-semibold text-teal-600">{numero}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-navy-900">{titre}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-content px-5">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-400">Questions fréquentes</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white">Tout savoir avant votre intervention</h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {faq.map((item) => (
              <details key={item.q} className="group rounded-card border border-navy-700 bg-navy-800/70 p-5 text-white">
                <summary className="cursor-pointer list-none font-display font-semibold">{item.q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-navy-200">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-20">
        <div className="rounded-card bg-teal-500 px-7 py-12 text-center text-white md:px-12">
          <h2 className="font-display text-3xl font-bold">Besoin d'un diagnostic immobilier ?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-teal-50">
            Expliquez-nous votre projet et recevez une réponse rapide, claire et sans engagement.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/devis" className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-navy-900 hover:bg-mist">Demander un devis</Link>
            <a href="tel:+33602127143" className="rounded-md border border-white/60 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">06 02 12 71 43</a>
          </div>
        </div>
      </section>
    </>
  );
}
