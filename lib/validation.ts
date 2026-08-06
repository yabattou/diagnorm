export type DevisFormData = {
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  adresse: string;
  codePostal: string;
  ville: string;
  typeBien: string;
  surface: string;
  anneeConstruction: string;
  projet: string;
  copropriete: string;
  gazPlus15Ans: string;
  electricitePlus15Ans: string;
  diagnostics: string[];
  message: string;
  consentement: boolean;
};

export type ValidationResult = {
  valid: boolean;
  errors: Partial<Record<keyof DevisFormData, string>>;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^(\+33|0)[1-9](\s?\d{2}){4}$/;

export function validateDevisForm(data: DevisFormData): ValidationResult {
  const errors: ValidationResult["errors"] = {};

  if (!data.nom?.trim()) errors.nom = "Le nom est requis.";
  if (!data.prenom?.trim()) errors.prenom = "Le prénom est requis.";

  if (!data.telephone?.trim()) {
    errors.telephone = "Le téléphone est requis.";
  } else if (!PHONE_REGEX.test(data.telephone.replace(/[.\-]/g, ""))) {
    errors.telephone = "Le format du téléphone semble invalide.";
  }

  if (!data.email?.trim()) {
    errors.email = "L'e-mail est requis.";
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = "Le format de l'e-mail semble invalide.";
  }

  if (!data.adresse?.trim()) errors.adresse = "L'adresse du bien est requise.";
  if (!data.codePostal?.trim()) errors.codePostal = "Le code postal est requis.";
  if (!data.ville?.trim()) errors.ville = "La ville est requise.";
  if (!data.typeBien) errors.typeBien = "Le type de bien est requis.";
  if (!data.projet) errors.projet = "Le projet est requis.";

  if (!data.diagnostics || data.diagnostics.length === 0) {
    errors.diagnostics = "Sélectionnez au moins un diagnostic ou « Je ne sais pas ».";
  }

  if (!data.consentement) {
    errors.consentement = "Le consentement RGPD est requis pour envoyer la demande.";
  }

  return { valid: Object.keys(errors).length === 0, errors };
}
