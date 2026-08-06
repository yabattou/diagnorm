export type Departement = {
  slug: string;
  nom: string;
  code: string;
};

export const departements: Departement[] = [
  {
    slug: "paris",
    nom: "Paris",
    code: "75",
  },
  {
    slug: "seine-et-marne",
    nom: "Seine-et-Marne",
    code: "77",
  },
  {
    slug: "yvelines",
    nom: "Yvelines",
    code: "78",
  },
  {
    slug: "essonne",
    nom: "Essonne",
    code: "91",
  },
  {
    slug: "hauts-de-seine",
    nom: "Hauts-de-Seine",
    code: "92",
  },
  {
    slug: "seine-saint-denis",
    nom: "Seine-Saint-Denis",
    code: "93",
  },
  {
    slug: "val-de-marne",
    nom: "Val-de-Marne",
    code: "94",
  },
  {
    slug: "val-d-oise",
    nom: "Val-d'Oise",
    code: "95",
  },
];

export const villesPrincipales = [
  "Paris",
  "Sannois",
  "Argenteuil",
  "Cergy",
  "Pontoise",
  "Franconville",
  "Ermont",
  "Eaubonne",
  "Taverny",
  "Herblay-sur-Seine",
  "Colombes",
  "Nanterre",
  "Courbevoie",
  "Asnières-sur-Seine",
  "Boulogne-Billancourt",
  "Saint-Denis",
  "Montreuil",
  "Créteil",
  "Versailles",
  "Saint-Germain-en-Laye",
  "Évry-Courcouronnes",
  "Melun",
  "Meaux",
];

export const zoneIntervention = {
  nom: "Île-de-France",
  description:
    "DIAGNORM intervient dans les huit départements d'Île-de-France pour réaliser vos diagnostics immobiliers dans le cadre d'une vente, d'une location ou d'une rénovation.",
};