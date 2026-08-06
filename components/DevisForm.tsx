"use client";

import { useState, FormEvent } from "react";

const diagnosticsOptions = [
  "DPE",
  "Amiante",
  "Plomb",
  "Électricité",
  "Gaz",
  "Termites",
  "État parasitaire",
  "État des Risques et Pollutions (ERP)",
  "Loi Carrez",
  "Loi Boutin",
  "Pack vente",
  "Pack location",
  "Je ne sais pas, conseillez-moi",
];

type Status = "idle" | "loading" | "success" | "error";

export default function DevisForm({ defaultDiagnostic }: { defaultDiagnostic?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [diagnostics, setDiagnostics] = useState<string[]>(
    defaultDiagnostic ? [defaultDiagnostic] : []
  );

  function toggleDiagnostic(value: string) {
    setDiagnostics((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      nom: formData.get("nom") as string,
      prenom: formData.get("prenom") as string,
      telephone: formData.get("telephone") as string,
      email: formData.get("email") as string,
      adresse: formData.get("adresse") as string,
      codePostal: formData.get("codePostal") as string,
      ville: formData.get("ville") as string,
      typeBien: formData.get("typeBien") as string,
      surface: formData.get("surface") as string,
      anneeConstruction: formData.get("anneeConstruction") as string,
      projet: formData.get("projet") as string,
      copropriete: formData.get("copropriete") as string,
      gazPlus15Ans: formData.get("gazPlus15Ans") as string,
      electricitePlus15Ans: formData.get("electricitePlus15Ans") as string,
      diagnostics,
      message: formData.get("message") as string,
      consentement: formData.get("consentement") === "on",
    };

    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrors(data.errors || {});
        return;
      }

      setStatus("success");
      form.reset();
      setDiagnostics([]);
    } catch (err) {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-card border border-teal-200 bg-teal-50 p-8 text-center">
        <h2 className="font-display text-xl font-bold text-navy-900">
          Votre demande a bien été envoyée.
        </h2>
        <p className="mt-2 text-navy-700">Diagnorm vous recontactera rapidement. Un accusé de réception vient également d'être envoyé à l'adresse e-mail indiquée.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <fieldset className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <legend className="col-span-full mb-1 font-display text-lg font-semibold text-navy-900">
          Vos coordonnées
        </legend>
        <Field label="Nom" name="nom" required error={errors.nom} />
        <Field label="Prénom" name="prenom" required error={errors.prenom} />
        <Field label="Téléphone" name="telephone" type="tel" required error={errors.telephone} />
        <Field label="E-mail" name="email" type="email" required error={errors.email} />
      </fieldset>

      <fieldset className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <legend className="col-span-full mb-1 font-display text-lg font-semibold text-navy-900">
          Le bien concerné
        </legend>
        <Field label="Adresse du bien" name="adresse" required error={errors.adresse} className="sm:col-span-2" />
        <Field label="Code postal" name="codePostal" required error={errors.codePostal} />
        <Field label="Ville" name="ville" required error={errors.ville} />

        <SelectField
          label="Type de bien"
          name="typeBien"
          required
          error={errors.typeBien}
          options={["Appartement", "Maison", "Local", "Immeuble"]}
        />
        <Field label="Surface approximative (m²)" name="surface" type="number" />
        <Field label="Année de construction" name="anneeConstruction" type="number" />
        <SelectField
          label="Projet"
          name="projet"
          required
          error={errors.projet}
          options={["Vente", "Location", "Autre"]}
        />

        <SelectField
          label="Bien en copropriété"
          name="copropriete"
          options={["Oui", "Non", "Je ne sais pas"]}
        />
        <SelectField
          label="Installation gaz de plus de 15 ans"
          name="gazPlus15Ans"
          options={["Oui", "Non", "Je ne sais pas"]}
        />
        <SelectField
          label="Installation électrique de plus de 15 ans"
          name="electricitePlus15Ans"
          options={["Oui", "Non", "Je ne sais pas"]}
        />
      </fieldset>

      <fieldset>
        <legend className="mb-3 font-display text-lg font-semibold text-navy-900">
          Diagnostics souhaités
        </legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {diagnosticsOptions.map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 rounded-md border border-navy-100 px-3 py-2.5 text-sm text-navy-800"
            >
              <input
                type="checkbox"
                checked={diagnostics.includes(option)}
                onChange={() => toggleDiagnostic(option)}
                className="h-4 w-4 rounded border-navy-300 text-teal-600 focus:ring-teal-500"
              />
              {option}
            </label>
          ))}
        </div>
        {errors.diagnostics && (
          <p className="mt-2 text-sm text-red-600">{errors.diagnostics}</p>
        )}
      </fieldset>

      <fieldset>
        <legend className="mb-2 font-display text-lg font-semibold text-navy-900">
          Message complémentaire
        </legend>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-md border border-navy-200 px-3.5 py-2.5 text-sm text-navy-900 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          placeholder="Précisez ici toute information utile à votre demande."
        />
      </fieldset>

      <div>
        <label className="flex items-start gap-3 text-sm text-navy-700">
          <input
            type="checkbox"
            name="consentement"
            className="mt-0.5 h-4 w-4 rounded border-navy-300 text-teal-600 focus:ring-teal-500"
          />
          <span>
            J'accepte que mes données soient utilisées par Diagnorm dans le cadre du
            traitement de ma demande de devis, conformément à la{" "}
            <a href="/politique-confidentialite" className="text-teal-600 underline">
              politique de confidentialité
            </a>
            .
          </span>
        </label>
        {errors.consentement && (
          <p className="mt-2 text-sm text-red-600">{errors.consentement}</p>
        )}
      </div>

      {status === "error" && Object.keys(errors).length === 0 && (
        <p className="text-sm text-red-600">
          Une erreur est survenue lors de l'envoi. Merci de réessayer ou de nous contacter directement.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-md bg-teal-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-600 disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande de devis"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  error,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-sm font-medium text-navy-800">
        {label} {required && <span className="text-teal-600">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-md border border-navy-200 px-3.5 py-2.5 text-sm text-navy-900 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required = false,
  error,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-navy-800">
        {label} {required && <span className="text-teal-600">*</span>}
      </label>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-md border border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
      >
        <option value="" disabled>
          Sélectionnez...
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
