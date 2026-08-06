import { NextRequest, NextResponse } from "next/server";
import { validateDevisForm, type DevisFormData } from "@/lib/validation";
import { sendDevisEmail } from "@/lib/sendEmail";

export async function POST(request: NextRequest) {
  let data: DevisFormData;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json(
      { errors: { global: "Le format de la demande est invalide." } },
      { status: 400 }
    );
  }

  const { valid, errors } = validateDevisForm(data);

  if (!valid) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  try {
    await sendDevisEmail(data);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Erreur d'envoi de l'e-mail de devis :", error);
    return NextResponse.json(
      { errors: { global: "L'envoi de la demande a échoué. Merci de réessayer." } },
      { status: 500 }
    );
  }
}
