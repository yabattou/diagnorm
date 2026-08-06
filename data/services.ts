export type FAQItem = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string; // Nom affiché, ex: "Diagnostic DPE"
  shortTitle: string; // Nom court pour cartes/menu, ex: "DPE"
  seoTitle: string; // <title> SEO
  metaDescription: string;
  h1: string;
  keywords: string;
  cardDescription: string; // Description courte pour la page d'accueil
  intro: string;
  explanation: string;
  whenNeeded: string[];
  process: string[];
  documents: string[];
  whyDiagnorm: string[];
  faq: FAQItem[];
};

export const services: Service[] = [
  {
    slug: "dpe",
    title: "Diagnostic DPE",
    shortTitle: "DPE",
    seoTitle: "Diagnostic DPE | Devis rapide avec Diagnorm",
    metaDescription:
      "Besoin d'un diagnostic DPE pour vendre ou louer votre bien ? Diagnorm vous accompagne avec un devis rapide et un service professionnel.",
    h1: "Diagnostic DPE pour vente et location",
    keywords: "diagnostic DPE, performance énergétique, diagnostic immobilier",
    cardDescription:
      "Évalue la performance énergétique d'un logement pour la vente ou la location.",
    intro:
      "Le Diagnostic de Performance Énergétique (DPE) renseigne les futurs acquéreurs ou locataires sur la consommation d'énergie et l'impact climatique d'un logement. C'est aujourd'hui l'un des documents les plus regardés dans un dossier immobilier.",
    explanation:
      "Le DPE évalue la quantité d'énergie consommée par un logement (chauffage, eau chaude, refroidissement) ainsi que ses émissions de gaz à effet de serre. Il attribue deux étiquettes, de A à G : une pour la performance énergétique, une pour l'impact climatique. Depuis la réforme de 2021, le DPE est opposable, ce qui signifie qu'un futur occupant peut se retourner contre le vendeur ou le bailleur en cas d'erreur manifeste.",
    whenNeeded: [
      "Vente d'une maison ou d'un appartement",
      "Mise en location d'un bien",
      "Construction d'un logement neuf",
      "Renouvellement d'un DPE arrivé à expiration",
    ],
    process: [
      "Prise de rendez-vous et confirmation par Diagnorm",
      "Visite du bien : relevé des surfaces, des matériaux, des menuiseries et des équipements de chauffage",
      "Analyse des factures ou de la configuration technique du logement",
      "Calcul de l'étiquette énergie et de l'étiquette climat",
      "Remise du rapport DPE complet, avec recommandations d'amélioration",
    ],
    documents: [
      "Factures d'énergie récentes (électricité, gaz)",
      "Plans du logement si disponibles",
      "Informations sur les travaux d'isolation ou de chauffage déjà réalisés",
    ],
    whyDiagnorm: [
      "Intervention rapide sur l'ensemble de votre zone",
      "Rapport clair, sans jargon inutile",
      "Conseils concrets pour améliorer l'étiquette énergétique",
      "Devis transmis sous 24h ouvrées",
    ],
    faq: [
      {
        question: "Quelle est la durée de validité d'un DPE ?",
        answer:
          "Un DPE réalisé après juillet 2021 est valable 10 ans. Les diagnostics établis entre 2013 et 2017 ont perdu leur validité fin 2022, ceux entre 2018 et juin 2021 fin 2024.",
      },
      {
        question: "Le DPE est-il obligatoire pour toutes les annonces ?",
        answer:
          "Oui, l'étiquette du DPE doit apparaître sur toute annonce immobilière de vente ou de location, dès la mise en ligne.",
      },
      {
        question: "Que se passe-t-il si mon logement est classé F ou G ?",
        answer:
          "Un logement classé F ou G est considéré comme une passoire thermique. Des restrictions progressives à la location s'appliquent déjà à certains logements classés G. Diagnorm vous informe des échéances qui concernent votre bien.",
      },
    ],
  },
  {
    slug: "amiante",
    title: "Diagnostic amiante",
    shortTitle: "Amiante",
    seoTitle: "Diagnostic amiante | Devis rapide avec Diagnorm",
    metaDescription:
      "Diagnostic amiante avant vente ou travaux : Diagnorm recherche la présence d'amiante dans votre bien avec un rapport clair et fiable.",
    h1: "Diagnostic amiante avant vente ou travaux",
    keywords: "diagnostic amiante, amiante immobilier",
    cardDescription:
      "Recherche la présence d'amiante dans les matériaux du bien concerné.",
    intro:
      "Le diagnostic amiante permet d'identifier la présence de matériaux contenant de l'amiante dans les bâtiments construits avant le 1er juillet 1997. Il protège les occupants et les professionnels intervenant sur le bien.",
    explanation:
      "L'amiante a été largement utilisé dans la construction jusqu'à son interdiction en 1997 : flocages, calorifugeages, dalles de sol, plaques de toiture, colles, enduits. Le diagnostiqueur repère les matériaux susceptibles d'en contenir, effectue des prélèvements si nécessaire, et fait analyser les échantillons en laboratoire accrédité.",
    whenNeeded: [
      "Vente d'un bien construit avant le 1er juillet 1997",
      "Avant des travaux de rénovation ou de démolition",
      "Mise à jour d'un diagnostic amiante ancien",
      "Gestion d'un immeuble en copropriété",
    ],
    process: [
      "Repérage visuel des matériaux et produits susceptibles de contenir de l'amiante",
      "Prélèvements ciblés en cas de doute",
      "Envoi des échantillons à un laboratoire accrédité",
      "Rédaction du rapport avec localisation précise et état de conservation",
      "Remise des recommandations si des matériaux amiantés sont identifiés",
    ],
    documents: [
      "Date de construction du bâtiment",
      "Plans ou informations sur d'éventuels travaux antérieurs",
      "Diagnostic amiante précédent, le cas échéant",
    ],
    whyDiagnorm: [
      "Repérage rigoureux dans toutes les parties accessibles",
      "Recours à des laboratoires accrédités pour les analyses",
      "Rapport détaillé et compréhensible",
      "Accompagnement en cas de matériaux amiantés détectés",
    ],
    faq: [
      {
        question: "Tous les biens sont-ils concernés ?",
        answer:
          "Seuls les biens dont le permis de construire est antérieur au 1er juillet 1997 sont concernés par l'obligation de diagnostic amiante.",
      },
      {
        question: "Que se passe-t-il si de l'amiante est détecté ?",
        answer:
          "Le rapport précise l'état de conservation des matériaux. Selon les cas, une simple surveillance périodique suffit, ou des travaux de confinement ou de retrait peuvent être recommandés.",
      },
      {
        question: "Quelle est la durée de validité du diagnostic amiante ?",
        answer:
          "En l'absence d'amiante, le diagnostic est valable sans limitation de durée pour une vente. En présence d'amiante, un suivi régulier peut être requis.",
      },
    ],
  },
  {
    slug: "plomb",
    title: "Diagnostic plomb",
    shortTitle: "Plomb",
    seoTitle: "Diagnostic plomb (CREP) | Devis rapide avec Diagnorm",
    metaDescription:
      "Diagnostic plomb (CREP) pour la vente ou la location de logements anciens. Diagnorm évalue le risque d'exposition au plomb rapidement.",
    h1: "Diagnostic plomb (CREP) pour logements anciens",
    keywords: "diagnostic plomb, CREP, plomb immobilier",
    cardDescription:
      "Contrôle le risque d'exposition au plomb, notamment dans les logements anciens.",
    intro:
      "Le Constat de Risque d'Exposition au Plomb (CREP) mesure la présence de plomb dans les peintures des logements construits avant 1949, pour protéger notamment les enfants et les femmes enceintes.",
    explanation:
      "Le diagnostiqueur mesure la concentration en plomb des revêtements à l'aide d'un appareil à fluorescence X, pièce par pièce. Le rapport indique les unités de diagnostic où des concentrations excessives sont relevées et leur état de dégradation.",
    whenNeeded: [
      "Vente d'un logement construit avant le 1er janvier 1949",
      "Mise en location d'un logement construit avant 1949",
      "Avant des travaux affectant les revêtements",
    ],
    process: [
      "Visite du logement pièce par pièce",
      "Mesures de la teneur en plomb sur les revêtements avec un appareil à fluorescence X",
      "Évaluation de l'état de conservation des revêtements",
      "Rédaction du rapport CREP avec localisation des éventuels dépassements de seuil",
    ],
    documents: [
      "Date de construction du logement",
      "Diagnostic plomb antérieur, si disponible",
    ],
    whyDiagnorm: [
      "Mesures précises pièce par pièce",
      "Rapport clair sur les zones à surveiller",
      "Explications simples sur les obligations liées au plomb",
      "Intervention rapide avant signature",
    ],
    faq: [
      {
        question: "Quelle est la durée de validité du CREP ?",
        answer:
          "En l'absence de plomb ou à faible concentration, le CREP est valable sans limite de durée pour une vente et 6 ans pour une location.",
      },
      {
        question: "Le CREP est-il obligatoire pour tous les logements ?",
        answer:
          "Il concerne uniquement les logements dont le permis de construire est antérieur au 1er janvier 1949.",
      },
      {
        question: "Que faire si du plomb est détecté à un seuil élevé ?",
        answer:
          "Le propriétaire doit informer les occupants et peut être tenu de réaliser des travaux pour supprimer le risque d'exposition.",
      },
    ],
  },
  {
    slug: "electricite",
    title: "Diagnostic électricité",
    shortTitle: "Électricité",
    seoTitle: "Diagnostic électricité | Devis rapide avec Diagnorm",
    metaDescription:
      "Diagnostic électricité pour vente ou location : Diagnorm vérifie l'état de votre installation intérieure et vous remet un rapport clair.",
    h1: "Diagnostic électricité pour vente et location",
    keywords: "diagnostic électricité, installation électrique",
    cardDescription: "Vérifie l'état de l'installation intérieure d'électricité.",
    intro:
      "Le diagnostic électricité vérifie la sécurité de l'installation intérieure d'un logement lorsqu'elle a plus de 15 ans. Il permet d'identifier les risques pour les occupants avant une vente ou une location.",
    explanation:
      "Le diagnostiqueur contrôle le tableau électrique, la mise à la terre, les dispositifs de protection différentiels, l'état des matériels et l'accessibilité des éléments sous tension. Chaque point contrôlé fait l'objet d'une évaluation conforme ou non conforme.",
    whenNeeded: [
      "Vente d'un logement dont l'installation électrique a plus de 15 ans",
      "Mise en location d'un logement dont l'installation a plus de 15 ans",
      "Renouvellement d'un diagnostic électrique expiré",
    ],
    process: [
      "Contrôle du tableau électrique et de son environnement",
      "Vérification de la mise à la terre et des dispositifs différentiels",
      "Contrôle des points d'usage (prises, interrupteurs, matériels fixes)",
      "Identification des risques de choc électrique ou d'incendie",
      "Remise du rapport listant les anomalies constatées",
    ],
    documents: [
      "Âge approximatif de l'installation électrique",
      "Diagnostic électrique précédent, si disponible",
    ],
    whyDiagnorm: [
      "Contrôle méthodique de tous les points normés",
      "Rapport détaillé et hiérarchisé par niveau de risque",
      "Conseils pratiques pour la mise en conformité",
      "Devis rapide et intervention flexible",
    ],
    faq: [
      {
        question: "Quelle est la durée de validité du diagnostic électricité ?",
        answer:
          "Il est valable 3 ans pour une vente et 6 ans pour une location.",
      },
      {
        question: "Le diagnostic électricité oblige-t-il à faire des travaux ?",
        answer:
          "Non, ce diagnostic est informatif. Il n'y a pas d'obligation de réaliser les travaux recommandés avant une vente, mais l'acquéreur en est informé.",
      },
      {
        question: "Toutes les installations sont-elles concernées ?",
        answer:
          "Seules les installations électriques de plus de 15 ans sont concernées par cette obligation.",
      },
    ],
  },
  {
    slug: "gaz",
    title: "Diagnostic gaz",
    shortTitle: "Gaz",
    seoTitle: "Diagnostic gaz | Devis rapide avec Diagnorm",
    metaDescription:
      "Diagnostic gaz pour vente ou location : Diagnorm contrôle votre installation intérieure de gaz et vous remet un rapport détaillé.",
    h1: "Diagnostic gaz pour vente et location",
    keywords: "diagnostic gaz, installation gaz",
    cardDescription: "Vérifie l'état de l'installation intérieure de gaz.",
    intro:
      "Le diagnostic gaz évalue la sécurité de l'installation intérieure de gaz d'un logement dès lors qu'elle a plus de 15 ans, afin de prévenir les risques d'intoxication ou d'explosion.",
    explanation:
      "Le diagnostiqueur contrôle la tuyauterie fixe, le raccordement des appareils, la ventilation des locaux et l'évacuation des produits de combustion. Chaque anomalie constatée est classée selon son niveau de danger.",
    whenNeeded: [
      "Vente d'un logement dont l'installation gaz a plus de 15 ans",
      "Mise en location d'un logement dont l'installation gaz a plus de 15 ans",
      "Renouvellement d'un diagnostic gaz expiré",
    ],
    process: [
      "Contrôle de la tuyauterie fixe et des raccordements",
      "Vérification des appareils de chauffage et de production d'eau chaude",
      "Contrôle de la ventilation des locaux contenant un appareil à gaz",
      "Vérification de l'évacuation des produits de combustion",
      "Remise du rapport avec la liste des éventuelles anomalies",
    ],
    documents: [
      "Âge approximatif de l'installation gaz",
      "Diagnostic gaz précédent, si disponible",
    ],
    whyDiagnorm: [
      "Contrôle complet de l'installation selon la réglementation en vigueur",
      "Rapport clair, avec priorisation des anomalies",
      "Conseils pour sécuriser rapidement l'installation",
      "Devis rapide sous 24h ouvrées",
    ],
    faq: [
      {
        question: "Quelle est la durée de validité du diagnostic gaz ?",
        answer:
          "Il est valable 3 ans pour une vente et 6 ans pour une location.",
      },
      {
        question: "Que se passe-t-il en cas de danger grave et immédiat ?",
        answer:
          "Le diagnostiqueur en informe immédiatement l'occupant et le propriétaire, et le fournisseur de gaz peut être amené à interrompre l'alimentation jusqu'à la mise en sécurité.",
      },
      {
        question: "Le diagnostic gaz concerne-t-il aussi le gaz de citerne ?",
        answer:
          "Oui, le diagnostic s'applique à toute installation alimentée en gaz naturel, propane ou butane, quel que soit le mode d'approvisionnement.",
      },
    ],
  },
  {
  slug: "erp",
  title: "État des Risques et Pollutions",
  shortTitle: "ERP",
  seoTitle: "ERP – État des Risques et Pollutions | Diagnorm",
  metaDescription:
    "Diagnorm prépare l'État des Risques et Pollutions nécessaire pour la vente ou la location de votre bien immobilier en Île-de-France.",
  h1: "État des Risques et Pollutions pour vente et location",
  keywords:
    "ERP immobilier, état des risques et pollutions, diagnostic risques immobiliers",
  cardDescription:
    "Informe l'acquéreur ou le locataire des risques naturels, miniers, technologiques et de pollution.",
  intro:
    "L'État des Risques et Pollutions permet d'informer le futur acquéreur ou locataire des risques recensés autour du bien immobilier.",
  explanation:
    "L'ERP est établi à partir des informations officielles disponibles pour l'adresse du bien. Il présente notamment les risques naturels, miniers, technologiques, sismiques, le potentiel radon et les secteurs d'information sur les sols.",
  whenNeeded: [
    "Vente d'une maison, d'un appartement ou d'un terrain",
    "Mise en location d'un logement",
    "Renouvellement d'un ERP devenu trop ancien",
    "Bien situé dans une zone couverte par un plan de prévention des risques",
  ],
  process: [
    "Vérification de l'adresse exacte et des références cadastrales",
    "Consultation des informations et arrêtés officiels",
    "Identification des risques concernant le bien",
    "Préparation du document ERP",
    "Transmission du document prêt à joindre au dossier de vente ou de location",
  ],
  documents: [
    "Adresse complète du bien",
    "Références cadastrales si elles sont disponibles",
    "Ancien ERP, le cas échéant",
    "Informations relatives à d'éventuels sinistres indemnisés",
  ],
  whyDiagnorm: [
    "Document préparé à partir des sources officielles",
    "Traitement rapide de votre demande",
    "Vérification attentive de l'adresse du bien",
    "Document clair et prêt à intégrer au dossier immobilier",
  ],
  faq: [
    {
      question: "Quelle est la durée de validité d'un ERP ?",
      answer:
        "L'ERP doit être suffisamment récent au moment de la signature. Il est donc conseillé de le faire établir peu avant la transaction ou la mise en location.",
    },
    {
      question: "L'ERP nécessite-t-il une visite du logement ?",
      answer:
        "En général, sa préparation repose sur l'adresse, les références cadastrales et les informations officielles. Une visite intérieure n'est habituellement pas nécessaire.",
    },
    {
      question: "L'ERP est-il obligatoire pour une location ?",
      answer:
        "Il doit être remis dans les situations prévues par la réglementation afin d'informer correctement le locataire des risques liés à la localisation du bien.",
    },
  ],
},
  {
    slug: "termites",
    title: "Diagnostic termites",
    shortTitle: "Termites",
    seoTitle: "Diagnostic termites | Devis rapide avec Diagnorm",
    metaDescription:
      "Diagnostic termites avant vente dans les zones concernées : Diagnorm recherche la présence de termites et vous informe clairement.",
    h1: "Diagnostic termites pour la vente d'un bien",
    keywords: "diagnostic termites, insectes xylophages",
    cardDescription: "Recherche la présence de termites dans les zones concernées.",
    intro:
      "Le diagnostic termites est obligatoire dans les zones à risque définies par arrêté préfectoral. Il permet de détecter la présence de ces insectes xylophages qui peuvent fragiliser la structure d'un bâtiment.",
    explanation:
      "Le diagnostiqueur inspecte visuellement les parties accessibles du bâtiment (bois de charpente, boiseries, sous-sols) à la recherche de traces de termites : galeries, déjections, altérations du bois. Il ne s'agit pas d'un sondage destructif.",
    whenNeeded: [
      "Vente d'un bien situé dans une zone déclarée à risque termites",
      "Suspicion de présence de termites",
      "Gestion d'un immeuble ancien en zone à risque",
    ],
    process: [
      "Inspection visuelle des pièces, combles, caves et sous-sols accessibles",
      "Recherche de traces d'activité termite sur les bois et matériaux cellulosiques",
      "Rédaction d'un état relatif à la présence de termites",
      "Recommandations en cas de traces détectées",
    ],
    documents: [
      "Accès aux combles, caves et sous-sols",
      "Informations sur d'éventuels traitements antérieurs",
    ],
    whyDiagnorm: [
      "Inspection minutieuse de toutes les zones accessibles",
      "Rapport clair sur l'état constaté",
      "Conseils en cas de traces suspectes",
      "Connaissance fine des zones à risque locales",
    ],
    faq: [
      {
        question: "Ce diagnostic est-il obligatoire partout ?",
        answer:
          "Non, il n'est obligatoire que dans les communes ou zones ayant fait l'objet d'un arrêté préfectoral déclarant un risque termites.",
      },
      {
        question: "Quelle est la durée de validité du diagnostic termites ?",
        answer: "Il est valable 6 mois à la date de signature de l'acte de vente.",
      },
      {
        question: "Que faire si des termites sont détectés ?",
        answer:
          "Une déclaration en mairie peut être requise, et un traitement spécialisé est généralement recommandé avant la vente.",
      },
    ],
  },
  {
    slug: "etat-parasitaire",
    title: "État parasitaire",
    shortTitle: "État parasitaire",
    seoTitle: "État parasitaire (mérule, insectes) | Diagnorm",
    metaDescription:
      "État parasitaire du bâtiment : Diagnorm recherche les parasites du bois et agents de dégradation (mérule, capricornes) avant votre vente.",
    h1: "État parasitaire du bâtiment",
    keywords: "état parasitaire, parasites bois, mérule",
    cardDescription:
      "Recherche les indices de présence de parasites du bois et agents de dégradation.",
    intro:
      "L'état parasitaire complète le diagnostic termites en recherchant l'ensemble des parasites du bois : capricornes, vrillettes, champignons lignivores comme la mérule. Il est particulièrement recommandé pour les bâtiments anciens ou humides.",
    explanation:
      "Le diagnostiqueur examine les charpentes, planchers et boiseries à la recherche de traces d'insectes xylophages ou de champignons. Il évalue l'ancienneté des attaques et leur caractère actif ou non.",
    whenNeeded: [
      "Vente d'un bien ancien ou présentant des signes d'humidité",
      "Suspicion de mérule ou d'insectes à larves xylophages",
      "Demande spécifique d'un notaire ou d'un acquéreur",
    ],
    process: [
      "Inspection visuelle des charpentes, planchers et boiseries accessibles",
      "Recherche de traces de capricornes, vrillettes ou mérule",
      "Évaluation du caractère actif ou ancien des attaques constatées",
      "Rédaction du rapport avec recommandations si nécessaire",
    ],
    documents: [
      "Accès aux combles et zones à risque d'humidité",
      "Historique de traitements antérieurs, si disponible",
    ],
    whyDiagnorm: [
      "Expertise sur les parasites du bois les plus courants dans la région",
      "Rapport détaillé, illustré si nécessaire",
      "Recommandations concrètes de traitement",
      "Intervention combinée possible avec le diagnostic termites",
    ],
    faq: [
      {
        question: "L'état parasitaire est-il obligatoire ?",
        answer:
          "Il n'est pas systématiquement obligatoire par la loi, sauf disposition locale spécifique, mais il est vivement recommandé pour rassurer l'acquéreur et sécuriser la transaction.",
      },
      {
        question: "Quelle est la différence avec le diagnostic termites ?",
        answer:
          "Le diagnostic termites est réglementé et ciblé sur les termites uniquement. L'état parasitaire élargit la recherche à d'autres insectes et champignons lignivores.",
      },
      {
        question: "Que faire en cas de mérule détectée ?",
        answer:
          "Une déclaration en mairie est obligatoire en cas de présence de mérule, et un traitement spécialisé est fortement recommandé avant toute vente.",
      },
    ],
  },
  {
    slug: "loi-carrez",
    title: "Mesurage Loi Carrez",
    shortTitle: "Loi Carrez",
    seoTitle: "Mesurage Loi Carrez | Devis rapide avec Diagnorm",
    metaDescription:
      "Mesurage Loi Carrez pour la vente d'un lot en copropriété. Diagnorm calcule la superficie privative avec précision et rapidité.",
    h1: "Mesurage Loi Carrez pour la vente en copropriété",
    keywords: "loi Carrez, mesurage Carrez",
    cardDescription:
      "Mesure la superficie privative d'un lot en copropriété lors d'une vente.",
    intro:
      "La Loi Carrez impose de mentionner la superficie privative exacte d'un lot de copropriété dans l'acte de vente. Une erreur de mesurage peut entraîner une action en réduction du prix par l'acquéreur.",
    explanation:
      "Le diagnostiqueur mesure chaque pièce du lot dont la hauteur sous plafond est supérieure à 1,80 mètre, en excluant les caves, garages et emplacements de stationnement qui ne sont pas soumis à cette loi.",
    whenNeeded: [
      "Vente d'un appartement ou d'un lot en copropriété",
      "Vérification d'une superficie Carrez ancienne",
      "Mise à jour après travaux modifiant l'agencement du lot",
    ],
    process: [
      "Visite du lot et relevé de chaque pièce",
      "Application des règles de la loi Carrez (hauteur, exclusions)",
      "Calcul de la superficie privative totale",
      "Remise de l'attestation de mesurage",
    ],
    documents: ["Plans du lot, si disponibles", "Règlement de copropriété"],
    whyDiagnorm: [
      "Mesures précises réalisées avec des outils de mesure laser",
      "Attestation conforme aux exigences légales",
      "Intervention rapide, souvent en moins de 30 minutes sur place",
      "Tarifs clairs et transparents",
    ],
    faq: [
      {
        question: "La Loi Carrez s'applique-t-elle aux maisons individuelles ?",
        answer:
          "Non, elle concerne uniquement les lots de copropriété (appartements, locaux commerciaux en copropriété).",
      },
      {
        question: "Quelle marge d'erreur est tolérée ?",
        answer:
          "Une différence de plus de 5 % entre la surface annoncée et la surface réelle peut permettre à l'acquéreur de demander une diminution du prix.",
      },
      {
        question: "Le mesurage Carrez a-t-il une durée de validité ?",
        answer:
          "Non, il reste valable tant que la configuration du lot n'est pas modifiée par des travaux.",
      },
    ],
  },
  {
    slug: "loi-boutin",
    title: "Mesurage Loi Boutin",
    shortTitle: "Loi Boutin",
    seoTitle: "Mesurage Loi Boutin | Devis rapide avec Diagnorm",
    metaDescription:
      "Mesurage Loi Boutin pour la mise en location d'un logement. Diagnorm calcule la surface habitable avec précision.",
    h1: "Mesurage Loi Boutin pour la location",
    keywords: "loi Boutin, mesurage Boutin, surface habitable",
    cardDescription:
      "Mesure la surface habitable d'un logement destiné à la location.",
    intro:
      "La Loi Boutin impose d'indiquer la surface habitable d'un logement dans le contrat de bail, qu'il s'agisse d'une maison ou d'un appartement. Elle protège le locataire en garantissant une information fiable.",
    explanation:
      "Le diagnostiqueur mesure la surface habitable en excluant les combles non aménagés, caves, garages, terrasses, balcons, et les surfaces dont la hauteur sous plafond est inférieure à 1,80 mètre.",
    whenNeeded: [
      "Mise en location d'un appartement ou d'une maison",
      "Vérification d'une surface habitable ancienne",
      "Mise à jour après travaux ou changement d'agencement",
    ],
    process: [
      "Visite du logement et relevé de chaque pièce habitable",
      "Application des règles de la loi Boutin (exclusions spécifiques)",
      "Calcul de la surface habitable totale",
      "Remise de l'attestation de mesurage",
    ],
    documents: ["Plans du logement, si disponibles"],
    whyDiagnorm: [
      "Mesures précises et rapides",
      "Attestation conforme aux exigences légales",
      "Idéal en complément d'un dossier de location complet",
      "Devis clair transmis rapidement",
    ],
    faq: [
      {
        question: "La Loi Boutin s'applique-t-elle aussi aux ventes ?",
        answer:
          "Non, elle concerne exclusivement les logements mis en location, à la différence de la Loi Carrez réservée aux ventes en copropriété.",
      },
      {
        question: "Quelles surfaces sont exclues du calcul ?",
        answer:
          "Les combles non aménagés, caves, sous-sols, remises, garages, terrasses, balcons et loggias ainsi que les surfaces sous 1,80 mètre de hauteur sont exclus.",
      },
      {
        question: "Que risque un propriétaire en cas d'erreur de surface ?",
        answer:
          "Le locataire dispose d'un délai légal pour demander une diminution du loyer si la surface réelle est inférieure de plus de 5 % à celle mentionnée au bail.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
