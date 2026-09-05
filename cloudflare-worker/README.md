# Deploying the Nail Artist AI (one-time setup, ~10 minutes, $0)

The chatbot on the site can run in two modes:

- **Scripted mode** (default): keyword-matched answers, works with zero setup.
- **Real AI mode**: answers come from Llama 3.3 70B via Groq (free, no credit
  card) through this Cloudflare Worker, which keeps your API key secret. The
  site switches to this mode automatically once you paste your Worker URL
  into `script.js` (step 4).

If the Worker is ever down or rate-limited, the site silently falls back to
scripted mode — the chat never breaks.

## Step 1 — Get a free Groq API key

1. Go to https://console.groq.com and sign up (no credit card required to
   create a key).
2. Go to **API Keys → Create API Key**, name it `portfolio-bot`, and copy the
   key (starts with `gsk_`). You'll paste it in step 3 — don't put it
   anywhere else, especially not in the website code.

## Step 2 — Create the Cloudflare Worker

1. Go to https://dash.cloudflare.com and sign up (free plan is plenty:
   100,000 requests/day).
2. In the left sidebar: **Workers & Pages → Create → Create Worker**.
3. Name it something like `nail-artist-ai`, click **Deploy** (the hello-world
   default is fine for now).
4. Click **Edit code**, delete everything in the editor, and paste the entire
   contents of `worker.js` (this folder).
5. Click **Deploy** (top right).

## Step 3 — Add your API key as a secret

1. Back on the Worker's page: **Settings → Variables and Secrets → Add**.
2. Type: **Secret**. Name: `GROQ_API_KEY` (exactly). Value: the `gsk_...` key
   from step 1.
3. Save (and redeploy if prompted).

## Step 4 — Point the site at the Worker

1. Copy the Worker URL shown on its overview page — it looks like
   `https://nail-artist-ai.<your-subdomain>.workers.dev`.
2. In `script.js` (repo root), find the line near the top of the chatbot
   section:

   ```js
   const CHAT_API_URL = "";
   ```

   and paste the URL between the quotes:

   ```js
   const CHAT_API_URL = "https://nail-artist-ai.<your-subdomain>.workers.dev";
   ```

3. Commit and push (or ask Claude to). Done — the chat is now real AI, and it
   costs nothing.

## Notes

- The Worker only accepts requests from ridhimamotewar.github.io and
  localhost, only answers questions using the knowledge baked into its
  system prompt, and caps reply length — so a stranger can't use it as a
  free general-purpose chatbot.
- To update the bot's knowledge later (new internship, new project), edit
  `SYSTEM_PROMPT` in `worker.js` and redeploy via **Edit code → Deploy**.
- Model choice: `openai/gpt-oss-20b` is fast and self-serve on a standard
  key. Groq prices it per token (a portfolio bot's traffic costs fractions
  of a cent — each reply is capped at 400 tokens), and new accounts
  typically start with some free credit; check console.groq.com/settings/billing
  for your balance. Groq has moved some other models (Llama 3.1 8B, Llama
  3.3 70B) behind an Enterprise/contact-sales plan — a self-serve key can't
  use those, so don't switch `MODEL` to them. If you ever hit a rate or
  spend limit, requests fail over to the scripted bot automatically —
  nothing breaks, visitors just get the scripted answers until it resets.
  Current self-serve models are listed at https://console.groq.com/docs/models
  (anything not tagged "Enterprise").
