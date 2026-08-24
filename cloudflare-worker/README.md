# Deploying the Nail Artist AI (one-time setup, ~10 minutes)

The chatbot on the site can run in two modes:

- **Scripted mode** (default): keyword-matched answers, works with zero setup.
- **Real AI mode**: answers come from Claude via this Cloudflare Worker, which
  keeps your Anthropic API key secret. The site switches to this mode
  automatically once you paste your Worker URL into `script.js` (step 4).

If the Worker is ever down or over budget, the site silently falls back to
scripted mode — the chat never breaks.

## Step 1 — Get an Anthropic API key

1. Go to https://console.anthropic.com and sign up (or sign in).
2. Add a small amount of credit (Buy Credits — $5 lasts a very long time for
   a portfolio bot; each reply costs a fraction of a cent on Haiku).
3. Go to **API Keys → Create Key**, name it `portfolio-bot`, and copy the key
   (starts with `sk-ant-`). You'll paste it in step 3 — don't put it anywhere
   else, especially not in the website code.

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
2. Type: **Secret**. Name: `ANTHROPIC_API_KEY` (exactly). Value: the
   `sk-ant-...` key from step 1.
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

3. Commit and push (or ask Claude to). Done — the chat is now real AI.

## Notes

- The Worker only accepts requests from ridhimamotewar.github.io and
  localhost, only answers questions using the knowledge baked into its
  system prompt, and caps reply length — so a stranger can't use it as a
  free general-purpose Claude.
- To update the bot's knowledge later (new internship, new project), edit
  `SYSTEM_PROMPT` in `worker.js` and redeploy via **Edit code → Deploy**.
- Costs show up at console.anthropic.com under Usage. With Haiku and a
  400-token reply cap, even a busy month is pocket change; you can also set
  a hard monthly spend limit in the Anthropic console under Limits.
