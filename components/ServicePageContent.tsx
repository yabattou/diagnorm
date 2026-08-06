import Link from "next/link";
import type { Service } from "@/data/services";
import FAQ from "./FAQ";
import CTA from "./CTA";
import CornerFrame from "./CornerFrame";

export default function ServicePageContent({ service }: { service: Service }) {
  return (
    <>
      <section className="border-b border-navy-100 bg-mist">
        <div className="relative mx-auto max-w-3xl px-5 py-14 text-center">
          <CornerFrame className="absolute -left-2 -top-2 h-12 w-12 opacity-70 md:-left-4 md:-top-4" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-600">
            Diagnostic
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-navy-900 md:text-4xl">
            {service.h1}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-navy-600">{service.intro}</p>
          <Link
            href={`/devis?diagnostic=${service.slug}`}
            className="mt-6 inline-block rounded-md bg-teal-500 px-7 py-3 text-sm font-semibold text-white hover:bg-teal-600"
          >
            Demander un devis
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14">
        <article className="space-y-12">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy-900">
              En quoi consiste ce diagnostic ?
            </h2>
            <p className="mt-4 leading-relaxed text-navy-700">{service.explanation}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-navy-900">
              Dans quels cas ce diagnostic est-il nécessaire ?
            </h2>
            <ul className="mt-4 space-y-2.5">
              {service.whenNeeded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-navy-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-navy-900">
              Comment se déroule l'intervention ?
            </h2>
            <ol className="mt-4 space-y-3">
              {service.process.map((step, i) => (
                <li key={step} className="flex items-start gap-4 text-navy-700">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-navy-800 font-mono text-xs font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-navy-900">
              Quels documents préparer ?
            </h2>
            <ul className="mt-4 space-y-2.5">
              {service.documents.map((item) => (
                <li key={item} className="flex items-start gap-3 text-navy-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-card border border-navy-100 bg-mist p-6">
            <h2 className="font-display text-xl font-bold text-navy-900">
              Pourquoi faire appel à Diagnorm ?
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {service.whyDiagnorm.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-navy-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <FAQ items={service.faq} />

          <div className="text-center">
            <Link
              href={`/devis?diagnostic=${service.slug}`}
              className="inline-block rounded-md bg-teal-500 px-7 py-3.5 text-sm font-semibold text-white hover:bg-teal-600"
            >
              Demander un devis pour ce diagnostic
            </Link>
          </div>
        </article>
      </section>

      <CTA />
    </>
  );
}
