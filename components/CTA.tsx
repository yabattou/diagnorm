import Link from "next/link";

type CTAProps = {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
};

export default function CTA({
  title = "Besoin d'un diagnostic immobilier ?",
  subtitle = "Demandez votre devis en ligne en quelques minutes.",
  buttonLabel = "Obtenir mon devis",
}: CTAProps) {
  return (
    <section className="bg-navy-800">
      <div className="mx-auto max-w-content px-5 py-16 text-center">
        <h2 className="font-display text-2xl font-bold text-white md:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-navy-200">{subtitle}</p>
        <Link
          href="/devis"
          className="mt-7 inline-block rounded-md bg-teal-500 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-600"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
