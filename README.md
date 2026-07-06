# Logic Codes Landing Page

Premium one-page landing page for Logic Codes, an AI automation and software development company.

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js.

## Build

```bash
npm run build
npm run start
```

## Lead Form

The consultation form posts to `POST /api/strategy-call`.

Optional CRM/webhook forwarding:

```bash
LEAD_WEBHOOK_URL=https://your-webhook-url.example
```

When `LEAD_WEBHOOK_URL` is set, validated form submissions are forwarded as JSON.
