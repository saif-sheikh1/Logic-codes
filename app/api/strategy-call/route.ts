import { NextResponse } from "next/server";

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  budget?: unknown;
  message?: unknown;
};

function asCleanString(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 1000) : "";
}

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const lead = {
    name: asCleanString(payload.name),
    email: asCleanString(payload.email),
    company: asCleanString(payload.company),
    budget: asCleanString(payload.budget),
    message: asCleanString(payload.message),
    submittedAt: new Date().toISOString(),
  };

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email);
  const missingRequired = !lead.name || !emailIsValid || !lead.company || !lead.budget || !lead.message;

  if (missingRequired) {
    return NextResponse.json({ error: "Please provide all required fields." }, { status: 422 });
  }

  if (process.env.LEAD_WEBHOOK_URL) {
    const webhookResponse = await fetch(process.env.LEAD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });

    if (!webhookResponse.ok) {
      return NextResponse.json({ error: "Lead webhook failed." }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true });
}
