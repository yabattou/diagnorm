import { Resend } from "resend";
import type { DevisFormData } from "./validation";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY n'est pas configurée dans les variables d'environnement."
    );
  }

  return new Resend(apiKey);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatMultilineText(value?: string): string {
  return escapeHtml(value?.trim() || "—").replace(/\r?\n/g, "<br />");
}

function createRow(label: string, value: string) {
  return `
    <tr>
      <td
        style="
          width: 220px;
          padding: 12px 14px;
          border-bottom: 1px solid #dbe5ea;
          background-color: #f7fafb;
          color: #072644;
          font-weight: 700;
          vertical-align: top;
        "
      >
        ${label}
      </td>

      <td
        style="
          padding: 12px 14px;
          border-bottom: 1px solid #dbe5ea;
          color: #445866;
          vertical-align: top;
        "
      >
        ${value}
      </td>
    </tr>
  `;
}

function createSignature(siteUrl: string) {
  return `
    <tr>
      <td
        style="
          padding: 22px 30px;
          border-top: 1px solid #dbe5ea;
          background-color: #f7fafb;
        "
      >
        <div
          style="
            font-size: 19px;
            font-weight: 700;
            color: #072644;
          "
        >
          DIAGNORM
        </div>

        <div
          style="
            margin-top: 4px;
            font-size: 13px;
            color: #008f8c;
            font-weight: 700;
          "
        >
          Diagnostics immobiliers
        </div>

        <div
          style="
            margin-top: 14px;
            font-size: 13px;
            line-height: 1.7;
            color: #586c79;
          "
        >
          10 rue des Guillerands, 95110 Sannois
          <br />

          <a
            href="tel:+33602127143"
            style="color: #586c79; text-decoration: none;"
          >
            06 02 12 71 43
          </a>
          <br />

          <a
            href="mailto:contact@diagnorm.fr"
            style="color: #586c79; text-decoration: none;"
          >
            contact@diagnorm.fr
          </a>
          <br />

          <a
            href="${siteUrl}"
            style="color: #586c79; text-decoration: none;"
          >
            www.diagnorm.fr
          </a>
        </div>

        <div
          style="
            margin-top: 14px;
            font-size: 12px;
            line-height: 1.6;
            color: #072644;
            font-weight: 700;
          "
        >
          DPE · Amiante · Plomb · Gaz · Électricité · Termites · ERP
        </div>
      </td>
    </tr>
  `;
}

function createAdminEmailHtml(params: {
  data: DevisFormData;
  siteUrl: string;
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  diagnosticsListe: string;
}) {
  const {
    data,
    siteUrl,
    prenom,
    nom,
    email,
    telephone,
    diagnosticsListe,
  } = params;

  return `
    <!doctype html>
    <html lang="fr">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Nouvelle demande de devis Diagnorm</title>
      </head>

      <body
        style="
          margin: 0;
          padding: 0;
          background-color: #eef3f5;
          font-family: Arial, Helvetica, sans-serif;
          color: #072644;
        "
      >
        <table
          role="presentation"
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="background-color: #eef3f5; padding: 24px 12px;"
        >
          <tr>
            <td align="center">
              <table
                role="presentation"
                width="680"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="
                  width: 100%;
                  max-width: 680px;
                  background-color: #ffffff;
                  border-collapse: collapse;
                  border-radius: 12px;
                  overflow: hidden;
                "
              >
                <tr>
                  <td
                    style="
                      padding: 26px 30px;
                      background-color: #072644;
                      color: #ffffff;
                    "
                  >
                    <div
                      style="
                        font-size: 26px;
                        font-weight: 700;
                        letter-spacing: 0.5px;
                      "
                    >
                      DIAGNORM
                    </div>

                    <div
                      style="
                        margin-top: 5px;
                        font-size: 14px;
                        color: #b8e2df;
                      "
                    >
                      Nouvelle demande de devis immobilier
                    </div>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 26px 30px 10px;">
                    <p
                      style="
                        margin: 0;
                        font-size: 16px;
                        line-height: 1.6;
                        color: #445866;
                      "
                    >
                      Une nouvelle demande a été envoyée depuis le formulaire du
                      site Diagnorm.
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 16px 30px 28px;">
                    <table
                      role="presentation"
                      width="100%"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                      style="
                        width: 100%;
                        border: 1px solid #dbe5ea;
                        border-collapse: collapse;
                        font-size: 14px;
                        line-height: 1.5;
                      "
                    >
                      ${createRow("Nom complet", `${prenom} ${nom}`)}

                      ${createRow(
                        "Téléphone",
                        `<a
                          href="tel:${telephone.replace(/\s/g, "")}"
                          style="
                            color: #008f8c;
                            text-decoration: none;
                            font-weight: 700;
                          "
                        >
                          ${telephone}
                        </a>`
                      )}

                      ${createRow(
                        "E-mail",
                        `<a
                          href="mailto:${email}"
                          style="
                            color: #008f8c;
                            text-decoration: none;
                            font-weight: 700;
                          "
                        >
                          ${email}
                        </a>`
                      )}

                      ${createRow(
                        "Adresse du bien",
                        `${escapeHtml(data.adresse)}, ${escapeHtml(
                          data.codePostal
                        )} ${escapeHtml(data.ville)}`
                      )}

                      ${createRow("Type de bien", escapeHtml(data.typeBien))}

                      ${createRow(
                        "Surface",
                        `${escapeHtml(data.surface)} m²`
                      )}

                      ${createRow(
                        "Année de construction",
                        escapeHtml(data.anneeConstruction)
                      )}

                      ${createRow("Projet", escapeHtml(data.projet))}

                      ${createRow(
                        "Copropriété",
                        escapeHtml(data.copropriete)
                      )}

                      ${createRow(
                        "Installation gaz de plus de 15 ans",
                        escapeHtml(data.gazPlus15Ans)
                      )}

                      ${createRow(
                        "Installation électrique de plus de 15 ans",
                        escapeHtml(data.electricitePlus15Ans)
                      )}

                      ${createRow(
                        "Diagnostics demandés",
                        diagnosticsListe
                      )}

                      ${createRow(
                        "Message du client",
                        formatMultilineText(data.message)
                      )}
                    </table>
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 0 30px 28px;
                      text-align: center;
                    "
                  >
                    <a
                      href="mailto:${email}"
                      style="
                        display: inline-block;
                        padding: 13px 22px;
                        border-radius: 7px;
                        background-color: #008f8c;
                        color: #ffffff;
                        font-size: 14px;
                        font-weight: 700;
                        text-decoration: none;
                      "
                    >
                      Répondre au client
                    </a>
                  </td>
                </tr>

                ${createSignature(siteUrl)}
              </table>

              <div
                style="
                  max-width: 680px;
                  margin-top: 14px;
                  font-size: 11px;
                  line-height: 1.5;
                  color: #728590;
                  text-align: center;
                "
              >
                Cet e-mail a été envoyé automatiquement depuis le formulaire de
                devis du site Diagnorm.
              </div>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

function createClientEmailHtml(params: {
  data: DevisFormData;
  siteUrl: string;
  prenom: string;
  nom: string;
  diagnosticsListe: string;
}) {
  const { data, siteUrl, prenom, nom, diagnosticsListe } = params;

  const adresseBien = `${escapeHtml(data.adresse)}, ${escapeHtml(
    data.codePostal
  )} ${escapeHtml(data.ville)}`;

  return `
    <!doctype html>
    <html lang="fr">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Votre demande a bien été reçue</title>
      </head>

      <body
        style="
          margin: 0;
          padding: 0;
          background-color: #eef3f5;
          font-family: Arial, Helvetica, sans-serif;
          color: #072644;
        "
      >
        <table
          role="presentation"
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="background-color: #eef3f5; padding: 24px 12px;"
        >
          <tr>
            <td align="center">
              <table
                role="presentation"
                width="680"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="
                  width: 100%;
                  max-width: 680px;
                  background-color: #ffffff;
                  border-collapse: collapse;
                  border-radius: 12px;
                  overflow: hidden;
                "
              >
                <tr>
                  <td
                    style="
                      padding: 26px 30px;
                      background-color: #072644;
                      color: #ffffff;
                    "
                  >
                    <div
                      style="
                        font-size: 26px;
                        font-weight: 700;
                        letter-spacing: 0.5px;
                      "
                    >
                      DIAGNORM
                    </div>

                    <div
                      style="
                        margin-top: 5px;
                        font-size: 14px;
                        color: #b8e2df;
                      "
                    >
                      Diagnostics immobiliers
                    </div>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 30px 30px 16px;">
                    <h1
                      style="
                        margin: 0;
                        font-size: 24px;
                        line-height: 1.3;
                        color: #072644;
                      "
                    >
                      Votre demande a bien été reçue
                    </h1>

                    <p
                      style="
                        margin: 22px 0 0;
                        font-size: 16px;
                        line-height: 1.7;
                        color: #445866;
                      "
                    >
                      Bonjour ${prenom} ${nom},
                    </p>

                    <p
                      style="
                        margin: 14px 0 0;
                        font-size: 16px;
                        line-height: 1.7;
                        color: #445866;
                      "
                    >
                      Nous vous remercions pour votre demande de devis.
                      Celle-ci a bien été enregistrée et sera étudiée par
                      l'équipe Diagnorm.
                    </p>

                    <p
                      style="
                        margin: 14px 0 0;
                        font-size: 16px;
                        line-height: 1.7;
                        color: #445866;
                      "
                    >
                      Nous reviendrons vers vous dans les meilleurs délais.
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 8px 30px 26px;">
                    <div
                      style="
                        padding: 20px;
                        border-radius: 10px;
                        background-color: #eef8f7;
                        border: 1px solid #d5ebe9;
                      "
                    >
                      <div
                        style="
                          margin-bottom: 14px;
                          font-size: 17px;
                          font-weight: 700;
                          color: #072644;
                        "
                      >
                        Récapitulatif de votre demande
                      </div>

                      <div
                        style="
                          font-size: 14px;
                          line-height: 1.8;
                          color: #445866;
                        "
                      >
                        <strong style="color: #072644;">
                          Adresse du bien :
                        </strong>
                        ${adresseBien}
                        <br />

                        <strong style="color: #072644;">
                          Type de bien :
                        </strong>
                        ${escapeHtml(data.typeBien)}
                        <br />

                        <strong style="color: #072644;">
                          Projet :
                        </strong>
                        ${escapeHtml(data.projet)}
                        <br />

                        <strong style="color: #072644;">
                          Diagnostics :
                        </strong>
                        ${diagnosticsListe}
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 0 30px 30px;
                      text-align: center;
                    "
                  >
                    <a
                      href="mailto:contact@diagnorm.fr"
                      style="
                        display: inline-block;
                        padding: 13px 22px;
                        border-radius: 7px;
                        background-color: #008f8c;
                        color: #ffffff;
                        font-size: 14px;
                        font-weight: 700;
                        text-decoration: none;
                      "
                    >
                      Contacter Diagnorm
                    </a>

                    <div
                      style="
                        margin-top: 18px;
                        font-size: 13px;
                        line-height: 1.6;
                        color: #586c79;
                      "
                    >
                      Pour une demande urgente, appelez-nous au
                      <a
                        href="tel:+33602127143"
                        style="
                          color: #008f8c;
                          font-weight: 700;
                          text-decoration: none;
                        "
                      >
                        06 02 12 71 43
                      </a>.
                    </div>
                  </td>
                </tr>

                ${createSignature(siteUrl)}
              </table>

              <div
                style="
                  max-width: 680px;
                  margin-top: 14px;
                  font-size: 11px;
                  line-height: 1.5;
                  color: #728590;
                  text-align: center;
                "
              >
                Cet accusé de réception confirme uniquement la bonne réception
                de votre demande. Il ne constitue pas encore un devis.
              </div>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

export async function sendDevisEmail(data: DevisFormData) {
  const recipient = process.env.DEVIS_RECIPIENT_EMAIL;
  const sender = process.env.DEVIS_SENDER_EMAIL || "contact@diagnorm.fr";
  const siteUrl = process.env.SITE_URL || "https://www.diagnorm.fr";

  if (!recipient) {
    throw new Error(
      "DEVIS_RECIPIENT_EMAIL n'est pas configurée dans les variables d'environnement."
    );
  }

  const resend = getResendClient();

  const prenom = escapeHtml(data.prenom);
  const nom = escapeHtml(data.nom);
  const email = escapeHtml(data.email);
  const telephone = escapeHtml(data.telephone);

  const diagnosticsListe =
    data.diagnostics.length > 0
      ? escapeHtml(data.diagnostics.join(", "))
      : "Aucun diagnostic renseigné";

  const adminHtml = createAdminEmailHtml({
    data,
    siteUrl,
    prenom,
    nom,
    email,
    telephone,
    diagnosticsListe,
  });

  const clientHtml = createClientEmailHtml({
    data,
    siteUrl,
    prenom,
    nom,
    diagnosticsListe,
  });

  const adminText = `
Nouvelle demande de devis Diagnorm

Nom : ${data.prenom} ${data.nom}
Téléphone : ${data.telephone}
E-mail : ${data.email}
Adresse : ${data.adresse}, ${data.codePostal} ${data.ville}
Type de bien : ${data.typeBien}
Surface : ${data.surface} m²
Année de construction : ${data.anneeConstruction}
Projet : ${data.projet}
Copropriété : ${data.copropriete}
Gaz de plus de 15 ans : ${data.gazPlus15Ans}
Électricité de plus de 15 ans : ${data.electricitePlus15Ans}
Diagnostics : ${
    data.diagnostics.length > 0
      ? data.diagnostics.join(", ")
      : "Aucun diagnostic renseigné"
  }
Message : ${data.message?.trim() || "—"}
  `.trim();

  const clientText = `
Bonjour ${data.prenom} ${data.nom},

Nous vous remercions pour votre demande de devis.

Votre demande a bien été enregistrée et sera étudiée par l'équipe Diagnorm.
Nous reviendrons vers vous dans les meilleurs délais.

Récapitulatif :
Adresse du bien : ${data.adresse}, ${data.codePostal} ${data.ville}
Type de bien : ${data.typeBien}
Projet : ${data.projet}
Diagnostics : ${
    data.diagnostics.length > 0
      ? data.diagnostics.join(", ")
      : "Aucun diagnostic renseigné"
  }

Pour une demande urgente :
06 02 12 71 43
contact@diagnorm.fr
${siteUrl}

Cet accusé de réception confirme uniquement la bonne réception de votre demande.
Il ne constitue pas encore un devis.
  `.trim();

  const adminResult = await resend.emails.send({
    from: `Diagnorm - Formulaire de devis <${sender}>`,
    to: recipient,
    reply_to: data.email,
    subject: `Nouvelle demande de devis — ${data.prenom} ${data.nom}`,
    html: adminHtml,
    text: adminText,
    tags: [
      {
        name: "type",
        value: "demande_devis",
      },
    ],
  });

  if (adminResult.error) {
    throw new Error(
      `Échec de l'envoi de la demande à Diagnorm : ${adminResult.error.message}`
    );
  }

  const clientResult = await resend.emails.send({
    from: `Diagnorm <${sender}>`,
    to: data.email,
    reply_to: sender,
    subject: "Votre demande de devis a bien été reçue — Diagnorm",
    html: clientHtml,
    text: clientText,
    tags: [
      {
        name: "type",
        value: "accuse_reception",
      },
    ],
  });

  if (clientResult.error) {
    throw new Error(
      `La demande a été reçue, mais l'accusé de réception n'a pas pu être envoyé : ${clientResult.error.message}`
    );
  }

  return {
    adminEmailId: adminResult.data?.id,
    clientEmailId: clientResult.data?.id,
  };
}