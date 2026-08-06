import type { Metadata } from "next";
import { Sora, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["500"],
  display: "swap",
});

const siteUrl = process.env.SITE_URL || "https://www.diagnorm.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Diagnorm | Diagnostic immobilier pour vente et location",
    template: "%s",
  },
  description:
    "Diagnorm réalise vos diagnostics immobiliers (DPE, amiante, plomb, électricité, gaz, termites, mesurages) pour la vente et la location. Devis rapide en ligne.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Diagnorm",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DIAGNORM",
  description:
    "Diagnostiqueur immobilier intervenant dans toute l'Île-de-France : DPE, amiante, plomb, électricité, gaz, termites, ERP, état parasitaire, Loi Carrez et Loi Boutin.",
  url: siteUrl,
  email: "contact@diagnorm.fr",
  telephone: "+33602127143",
  address: {
    "@type": "PostalAddress",
    streetAddress: "10 rue des Guillerands",
    postalCode: "95110",
    addressLocality: "Sannois",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Paris" },
    { "@type": "AdministrativeArea", name: "Seine-et-Marne" },
    { "@type": "AdministrativeArea", name: "Yvelines" },
    { "@type": "AdministrativeArea", name: "Essonne" },
    { "@type": "AdministrativeArea", name: "Hauts-de-Seine" },
    { "@type": "AdministrativeArea", name: "Seine-Saint-Denis" },
    { "@type": "AdministrativeArea", name: "Val-de-Marne" },
    { "@type": "AdministrativeArea", name: "Val-d'Oise" },
  ],
  priceRange: "€€",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${sora.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
