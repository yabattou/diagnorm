"use client";

import { useState } from "react";
import type { FAQItem } from "@/data/services";

export default function FAQ({ items, title = "Questions fréquentes" }: { items: FAQItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className="font-display text-2xl font-bold text-navy-900">{title}</h2>
      <div className="mt-5 divide-y divide-navy-100 rounded-card border border-navy-100 bg-white">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question}>
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="text-sm font-semibold text-navy-900">{item.question}</span>
                <span
                  className={`shrink-0 text-teal-600 transition-transform ${isOpen ? "rotate-45" : ""}`}
                  aria-hidden="true"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
              </button>
              {isOpen && (
                <p className="px-5 pb-4 text-sm leading-relaxed text-navy-600">{item.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
