# Diagnorm — Site web

Site vitrine Next.js pour l'activité de diagnostic immobilier **Diagnorm**.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Resend pour l'envoi des e-mails de devis
- Déploiement recommandé : Vercel

## Installation

```bash
npm install
cp .env.example .env.local
```

Renseignez dans `.env.local` :

- `RESEND_API_KEY` : votre clé API [Resend](https://resend.com/)
- `DEVIS_RECIPIENT_EMAIL` : l'adresse qui recevra les demandes de devis
- `DEVIS_SENDER_EMAIL` : l'adresse d'expédition (doit appartenir à un domaine vérifié dans Resend)
- `SITE_URL` : l'URL définitive du site (utilisée pour le sitemap et les données structurées)

## Développement local

```bash
npm run dev
```

Le site est disponible sur http://localhost:3000

## Build de production

```bash
npm run build
npm run start
```

## Déploiement sur Vercel

1. Poussez le projet sur un dépôt Git (GitHub, GitLab...)
2. Importez le dépôt dans [Vercel](https://vercel.com/new)
3. Renseignez les variables d'environnement du fichier `.env.example` dans les paramètres du projet Vercel
4. Déployez

## Ce qu'il reste à personnaliser avant la mise en ligne

- **Zones d'intervention** (`data/zones.ts`) : remplacez les villes d'exemple par votre véritable zone d'intervention. Chaque ville ajoutée génère automatiquement une page locale optimisée SEO sur `/zones-intervention/[ville]`.
- **Mentions légales** (`app/mentions-legales/page.tsx`) : à compléter avec votre SIRET, votre assurance RC Pro et vos numéros de certification.
- **Politique de confidentialité** (`app/politique-confidentialite/page.tsx`) : à faire relire par un professionnel du droit si besoin.
- **Coordonnées** : téléphone et e-mail sont actuellement des exemples (`Header.tsx`, `Hero.tsx`, `layout.tsx`, page Contact). Remplacez `+33-1-00-00-00-00` et `contact@diagnorm.fr` par vos vraies coordonnées.
- **Logo** (`public/logo.svg`) : logo simple généré pour la démo, à remplacer par votre identité visuelle si vous en avez une.
- **Photos** : le site n'utilise volontairement aucune photo de stock ; vous pouvez ajouter vos propres visuels dans `public/images` et les intégrer dans les pages.

## Structure du contenu

- `data/services.ts` : contenu centralisé des 9 diagnostics (textes, FAQ, mots-clés). Modifier un service ici met à jour sa page dédiée automatiquement.
- `data/zones.ts` : villes et départements couverts, utilisés pour générer les pages locales SEO.
- Chaque page de diagnostic (`app/diagnostics/<slug>/page.tsx`) réutilise le gabarit `components/ServicePageContent.tsx`.

## SEO

- Chaque page a un `title` et une `meta description` uniques.
- Données structurées `LocalBusiness` (site entier) et `FAQPage` (chaque page de diagnostic).
- `app/sitemap.ts` et `app/robots.ts` génèrent automatiquement `/sitemap.xml` et `/robots.txt`, y compris les pages locales dynamiques.
- Une fois en ligne, pensez à connecter Google Search Console et votre fiche Google Business Profile.

## Formulaire de devis

Le formulaire (`components/DevisForm.tsx`) envoie les données à la route API `app/api/devis/route.ts`, qui valide les champs (`lib/validation.ts`) puis envoie l'e-mail via Resend (`lib/sendEmail.ts`). Objet de l'e-mail : « Nouvelle demande de devis Diagnorm ».
