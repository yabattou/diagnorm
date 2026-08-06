import Link from "next/link";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/diagnostics/${service.slug}`}
      className="group flex flex-col rounded-card border border-navy-100 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:border-teal-300"
    >
      <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-mist font-mono text-sm font-semibold text-navy-700 group-hover:bg-teal-50 group-hover:text-teal-700">
        {service.shortTitle.slice(0, 2).toUpperCase()}
      </span>
      <h3 className="font-display text-lg font-semibold text-navy-900">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-600">{service.cardDescription}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-600">
        En savoir plus
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
          <path d="M1 5h11.5M8 1l4.5 4-4.5 4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </span>
    </Link>
  );
}
