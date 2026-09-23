/* ═══════════════════════════════════════════════════════════
   PAINT MY STORY — interactions
   Edit SITE_CONTENT below to personalize projects & chatbot.
   ═══════════════════════════════════════════════════════════ */

const SITE_CONTENT = {
  name: "Ridhima Motewar",
  email: "rmotewar@wharton.upenn.edu",

  projects: [
    {
      id: "coreweave-agents",
      tag: "CoreWeave · Summer 2026",
      title: "CoreWeave FP&A Agent Suite",
      teaser: "Three production agents for the FP&A team — one turns a 25-hour monthly review into five minutes.",
      description:
        "As a Product Management intern at CoreWeave, I shipped three AI agents (built in Claude Code) that automated the finance team's most manual workflows. To get the logic right, I first ran the worst of them by hand: a full month-end PO compliance review that took five business days and still had errors. Then I encoded what I'd learned into a mix of deterministic rules and AI judgment — hard rules where the answer is black-and-white, AI where a human would otherwise have to eyeball it.",
      tools: ["Claude Code", "Python", "AI agents", "BRDs & decision trees", "FP&A workflows"],
      impact: [
        "PO compliance: 25 hours of monthly analyst work now runs in ~5 minutes",
        "Spend-routing bot live on the internal app platform and available to the entire organization",
        "CIP dashboard tied out within 1% in its first month",
        "3+ business days returned to analysts every month, year after year",
      ],
      techGroups: [
        {
          h: "Direct/Indirect Spend Routing Bot",
          items: [
            "The problem: classifying spend as Capex vs. Opex was manual and inconsistent, and miscategorized spend threw off downstream reporting.",
            "The input: anyone can type a plain-language description or upload an invoice/PO — no finance background required.",
            "The logic: a BRD-driven decision tree handles the clear-cut rules, with AI classification layered in for the judgment calls a fixed rulebook can't cover.",
            "The rollout: phase-tested through FP&A → Procurement → finance & accounting, then opened to the whole company.",
          ],
        },
        {
          h: "Policy Pilot (PO Compliance Agent)",
          items: [
            "The problem: a full month-end PO compliance review took an analyst 5 business days by hand — and still had errors.",
            "The data: pulls raw invoice data straight from enterprise data systems for the month selected.",
            "The check: deterministic rules catch the hard violations — duplicate POs, exhausted POs, unlinked invoices — while AI flags the softer policy violations that need pattern-matching, not just a threshold.",
            "The output: a headline overview, an eleven-tab analysis workbook, and a leadership-ready branded deck, generated automatically.",
          ],
        },
        {
          h: "CIP Dashboard",
          items: [
            "The problem: Construction-in-Progress data lived in a static spreadsheet someone had to update by hand.",
            "The build: reuses the Policy Pilot pattern to turn it into a live dashboard instead.",
            "The handoff: documented the pattern so any other finance team can build their own version.",
          ],
        },
      ],
      diagram: {
        caption: "Policy Pilot's month-end run: pick a month, get the full analysis.",
        steps: [
          { t: "Pick a month", s: "One input" },
          { t: "Pull invoice data", s: "Enterprise data systems" },
          { t: "Rules + AI judgment", s: "Hard rules, AI where it counts" },
          { t: "Full deliverables", s: "Overview · 11-tab workbook · deck" },
        ],
      },
      logo: "assets/projects/coreweave-logo.png",
      accent: "#8fa3b8",
    },
    {
      id: "ode",
      tag: "Anthropic Hackathon · 2025",
      title: "Ode",
      teaser: "Eye-driven presentations for speakers with Cerebral Palsy and ALS — Anthropic Hackathon track winner.",
      description:
        "An assistive presentation platform for individuals with cerebral palsy. Converts three eye-driven inputs into real-time AI-generated speech through a Flask backend. Blink-based navigation and agent workflows let users deliver end-to-end presentations — slides, Q&A, and transcripts — with under one second of response time.",
      tools: ["Python", "Flask", "Eye tracking", "AI agents", "Speech synthesis"],
      impact: [
        "Track Winner at the Anthropic Hackathon",
        "Sub-1s response time from eye input to spoken output",
        "Full presentation flow: slides, live Q&A, and transcripts",
      ],
      tech: [
        "The entire interface runs on three eye-driven inputs plus a blink for navigation — no keyboard, no mouse, no assistant required mid-presentation.",
        "A Flask backend orchestrates the agent workflow: interpret the gaze input, decide the next presentation action, then generate the speech to say.",
        "Full presentation loop, not just text-to-speech — slide advancement, live Q&A answers, and a running transcript of everything said.",
        "Sub-1-second budget from eye input to audio out. That latency ceiling drove every architectural decision, because a pause longer than a second reads as a failure to the audience.",
      ],
      diagram: {
        caption: "From a glance to a spoken sentence in under a second.",
        steps: [
          { t: "Eye input", s: "3 gaze targets + blink" },
          { t: "Flask backend", s: "Routes intent" },
          { t: "Agent workflow", s: "Picks the next action" },
          { t: "AI speech", s: "Generated & spoken aloud" },
        ],
      },
      embed: { type: "drive", id: "1hn0D2kM6BSYNvB0T1q5lcAXcAW1TPI28", title: "Ode demo — Anthropic Hackathon 2025" },
      flip: "assets/projects/flip-ode.jpg",
      accent: "#b3a3dd",
    },
    {
      id: "echo-eyes",
      tag: "Congressional App Challenge · 2024",
      title: "Echo Eyes",
      teaser: "A mobile companion for the visually impaired — Congressional App Challenge Top 3.",
      description:
        "An accessible mobile app that assists the visually impaired community with OCR, object recognition, and multimodal prompting. I engineered the end-to-end solution — React Native front end with Python-based ML pipelines — and took it from idea to real-world adoption.",
      tools: ["React Native", "JavaScript", "Expo Go", "Figma", "ML pipelines"],
      impact: [
        "Approved by 20+ schools for the blind",
        "Top 3 Finalist, Congressional App Challenge",
        "OCR, object recognition, and multimodal prompting in one flow",
      ],
      tech: [
        "React Native and JavaScript, running through Expo Go.",
        "Python ML pipelines behind two scanners: a Text Scanner that reads documents, household products, and street signs aloud, and an Image Scanner that identifies objects — plus multimodal prompting for open-ended questions.",
        "UI designed in Figma against the failure modes of existing apps. Our team read dozens of reviews of Seeing AI and Be My Eyes complaining about being unable to find the buttons. To solve, Echo Eyes uses a few large buttons that vibrate and speak their own labels when pressed.",
        "Built-in text-to-speech and a simple enough interface that it needs no assistance from a sighted person to navigate — unlike the market's biggest apps.",
      ],
      diagram: {
        caption: "One camera frame, three ways to understand it.",
        steps: [
          { t: "Camera frame", s: "React Native capture" },
          { t: "ML pipeline", s: "OCR · objects · multimodal" },
          { t: "Description", s: "Plain-language answer" },
          { t: "Spoken aloud", s: "Screen never needed" },
        ],
      },
      embed: { type: "youtube", id: "z3hqg8RKDr0", title: "Echo Eyes demo — Congressional App Challenge 2024" },
      flip: "assets/projects/flip-echo.jpg",
      accent: "#d9b36c",
    },
    {
      id: "lunar-llamas",
      tag: "501c3 · 2020 — Present",
      title: "Lunar Llamas",
      teaser: "A 501c3 with patent-pending hygiene units for the unhoused.",
      description:
        "A nonprofit I co-founded in 2020: portable, self-cleaning hygiene units addressing sanitation access for the unhoused. I led end-to-end product development — from CAD prototyping to  approvals across 17 California cities — alongside fundraising and community partnerships with LavaMae and Good2Go.",
      tools: ["CAD", "Magnetic reed switch & PIR sensors", "FRP fabrication", "Regulatory approvals", "Fundraising"],
      impact: [
        "Patent-pending design, approved across 17 California cities",
        "Automated shower serves up to 350 people per week",
        "11 community drives distributing essentials to 800+ people",
      ],
      tech: [
        "Curved FRP (fiberglass-reinforced plastic) walls with an integrated ceiling nozzle pressure-wash the wet side after every single use — no staff cleaning required between users.",
        "A magnetic reed switch on the wet-side door, combined with a PIR motion sensor, automatically triggers the self-cleaning (ASC) system at the right moment — cutting cleaning time in half versus a manual or always-on cycle.",
        "Split-plan layout: a self-cleaning wet side (36 × 60 in) kept separate from a dry changing side (48 × 60 in), full unit ADA-compliant with a 32-inch door and a fold-down bench 17 in off the ground.",
        "Floor sloped 1:48 to the drain — the maximum gentle grade that still drains — over an 18-inch crawl space housing the plumbing and cleaning system.",
        "CAD prototyping straight through regulatory approval in 17 California cities; the automated design now serves up to 350 people a week.",
      ],
      media: [
        {
          img: "assets/projects/lunar-floorplan.png",
          caption: "The unit's floor plan and dimensions — wet side, dry side, and equipment bay.",
        },
      ],
      flip: "assets/projects/lunar-floorplan.png",
      accent: "#e3c98f",
    },
    {
      id: "penn-hyperloop",
      tag: "Lead Fluids Engineer",
      title: "Penn Hyperloop × The Boring Company",
      teaser: "Designed and fabricated the TBM muck chamber that helped take 2nd at TBC's competition.",
      description:
        "As Lead Fluids Engineer on Penn Hyperloop, I designed and fabricated the muck chamber for the team's TBM (Tunnel Boring Machine) — the vessel that collects excavated material as the machine digs — for The Boring Company's international Not-A-Boring Competition, where teams present in front of representatives from The Boring Company, Boeing, and NASA.",
      tools: ["CAD — Onshape · SolidWorks", "Shop machinery", "Fabrication", "Systems integration"],
      impact: [
        "2nd place at The Boring Company's Not-A-Boring Competition",
        "Owns the muck chamber subsystem end to end, design through fabrication",
        "Presented alongside the team to reps from TBC, Boeing, and NASA",
      ],
      tech: [
        "The muck chamber sits behind the cutterhead and takes everything the TBM excavates — it has to swallow abrasive spoil continuously without clogging or leaking while the machine bores.",
        "Full ownership from CAD through the shop: modeled, fabricated, and integrated with the rest of the machine's systems.",
        "A 3D-printed holder secures the GCS (ground conditioning system) lines that loosen the dirt in front of the TBM.",
      ],
      media: [
        {
          img: "assets/projects/hyperloop-cad.png",
          caption: "Initial CAD model of Muck Chamber.",
        },
        {
          img: "assets/projects/hyperloop-component.jpg",
          caption: "3D printed holder for the GCS (ground conditioning system) lines.",
        },
      ],
      embed: {
        type: "drive",
        id: "16RV3mNmUOMDNa5rR-cWJJFGZHrajRPtS",
        title: "Penn Hyperloop muck chamber — build footage",
        caption: "TBM in action!",
      },
      flip: "assets/projects/hyperloop-cad.png",
      accent: "#5b7a94",
    },
    {
      id: "dankmeyer",
      tag: "Dankmeyer · Summer 2024",
      title: "Dankmeyer Prosthetics & Orthotics",
      teaser: "The company's first-ever high school intern — 40 hours a week in a full-service prosthetics lab.",
      description:
        "Dankmeyer had never taken a high school intern before. I worked 40 hours a week in their full-service lab: CADing shop tooling, fabricating robotic prostheses, and sitting in on patient appointments where the devices I'd worked on were fitted and adjusted. Tolerances stop being abstract when a millimeter changes how someone walks.",
      tools: ["CAD", "FDM / DLP 3D printing", "Silicone molding", "Fabrication", "R&D"],
      impact: [
        "First high school intern in company history",
        "CADded shop arbor molds in-house, saving $70–$90 per attachment",
        "Adjusted prostheses during live patient appointments",
      ],
      tech: [
        "Sockets, the part of a lower-limb prosthesis that replaces the knee joint, used to be purchased pre-made. I fabricated and 3D-printed the locks and pucks for them, so the entire device could be made in-house.",
        "Molded custom silicone gel liners — the layer between a patient's residual limb and the device — for patients whose limb shape doesn't fit a prefabricated liner.",
        "The arbor project: designed CAD molds for the shop's sanding arbors (normally $70–$90 each to buy), iterated through a one-piece design, an interlocking two-part mold for easier release, and printed the finals on FDM and DLP printers.",
        "Printed and inventoried 22 socket connectors on the DLP printer, plus fabricated a gluteal prosthesis (printed shell, glued and screwed together, finished with injection molding) and scanned lab components into a digital library for future CAD reference.",
      ],
      embed: { type: "slides", id: "1SIkfROsNBY3XtEl5Rp8U5knsHjQuNhtFBrpU8yvXrco", title: "Dankmeyer internship project slideshow" },
      flip: "assets/projects/flip-dankmeyer.jpg",
      accent: "#7fb0a9",
    },
  ],

  // ── Nail art gallery (Creativity) ──
  nailArt: [
    { file: "merlot-leopard.jpg",  name: "Merlot Leopard",     date: "March 2026",    tint: "#7d2340" },
    { file: "sapphire-gold.jpg",   name: "Sapphire & Gold Leaf", date: "May 2025",    tint: "#1f4fa8" },
    { file: "christmas-story.jpg", name: "Christmas Story",    date: "January 2025",  tint: "#c62d34" },
    { file: "celestial-navy.jpg",  name: "Celestial Navy",     date: "February 2024", tint: "#1b2f7a" },
    { file: "winter-blooms.jpg",   name: "Winter Blooms",      date: "December 2023", tint: "#e0453a" },
    { file: "cherry-blossom.jpg",  name: "Cherry Blossom",     date: "October 2023",  tint: "#d4818f" },
    { file: "lilac-marble.jpg",    name: "Lilac Marble",       date: "July 2023",     tint: "#a48cd0" },
    { file: "candy-cane.jpg",      name: "Candy Cane",         date: "December 2022", tint: "#1c6b4a" },
    { file: "champagne-gold.jpg",  name: "Champagne Gold",     date: "November 2022", tint: "#c9a24b" },
    { file: "royal-blue.jpg",      name: "Royal Blue & Silver", date: "October 2022", tint: "#26309b" },
  ],

  // ── Chatbot knowledge base ──
  bot: {
    greeting:
      "Welcome to the studio! 💅 I'm the Nail Artist AI — Ridhima's front-desk concierge. Ask me about her work at CoreWeave, her projects, Penn life, or how to get in touch.",
    fallback:
      "Hmm, that shade isn't in my collection yet! Try asking about Ridhima's CoreWeave internship, projects, education, leadership, or how to contact her — or tap one of the suggestions below.",
    chips: ["Who is Ridhima?", "Tell me about CoreWeave", "Show me her projects", "Where does she study?", "How do I contact her?"],
    intents: [
      {
        keys: ["coreweave", "intern", "fp&a", "fpa", "finance team", "agents", "analyst", "policy pilot", "union"],
        reply:
          "Her freshest coat! ✨ In Summer 2026 Ridhima interned on CoreWeave's FP&A team and shipped three agents built in Claude Code: a spend-routing bot live on the internal app platform for the whole org, Policy Pilot (turns a 25-hour monthly PO compliance review into ~5 minutes), and a live CIP dashboard that tied out within 1%. The full case study is the first card in the Projects gallery.",
      },
      {
        keys: ["who", "about", "ridhima", "yourself", "she", "her story", "background", "bio"],
        reply:
          "Ridhima is an M&T student at Penn — one of 50 selected worldwide — pursuing computer science at Penn Engineering and finance at Wharton. Most recently she interned on CoreWeave's FP&A team building AI agents. She also co-founded a 501c3 with a patent-pending product, and yes, the nail art theme is a real hobby. Open the About Me bottle for the full story! ✨",
      },
      {
        keys: ["education", "study", "school", "college", "penn", "upenn", "wharton", "m&t", "mt program", "major", "degree", "university"],
        reply:
          "She's at the University of Pennsylvania in the Jerome Fisher Program in Management & Technology (M&T) — just 50 students selected worldwide. Dual degree: B.S.E. in Mechanical Engineering at Penn Engineering plus a B.S. in Economics with a finance concentration at Wharton, and she's a Joseph Wharton Scholar. Before Penn she was salutatorian at Quarry Lane School with a 4.74 GPA. 🎓",
      },
      {
        keys: ["project", "work", "portfolio", "built", "case study", "gallery", "app", "ode", "echo", "lunar", "dankmeyer", "prosthetic"],
        reply:
          "Six pieces in the gallery: the CoreWeave FP&A Agent Suite (a 25-hour review cut to 5 minutes), Ode (eye-driven speech — Anthropic Hackathon track winner), Echo Eyes (Congressional App Challenge Top 3, with a demo video), Lunar Llamas (patent-pending hygiene units), the Penn Hyperloop TBM muck chamber (2nd at TBC's competition), and Dankmeyer prosthetics (their first-ever high school intern, with the full project slideshow). Tap the gold Projects bottle! 💅",
      },
      {
        keys: ["skill", "stack", "tech", "tools", "language", "code", "react", "python", "java", "ocaml", "figma", "cad", "solidworks", "onshape", "marathi"],
        reply:
          "Her kit runs hardware to software: CAD in Onshape, SolidWorks, and Fusion; shop machinery and fabrication; Python, Java, React Native, and OCaml; AI agents and LLM evaluation; Figma and Canva. She speaks English and Marathi. Equal parts brush, keyboard, and mill. 🛠️",
      },
      {
        keys: ["lead", "leader", "team", "mentor", "president", "vice", "manage", "club", "society", "vita", "product space", "robotics", "nonprofit", "501c3", "volunteer", "hyperloop", "boring company", "girls into vc", "board", "akshaya"],
        reply:
          "On campus she's VP of Fellowship at Product Space @ Penn, Lead Fluids Engineer on Penn Hyperloop (2nd at TBC's competition), an officer with the Volunteer Income Tax Association ($3M in refunds delivered), VP of Internal Affairs at Girls into VC (sourced and pitched a healthcare startup to the club), and part of the M&T Board. Beyond Penn: co-founded Lunar Llamas (a 501c3 serving 800+ people), captained a 100-person FIRST Robotics team to Worlds 3×, and raised $19,690 as Akshaya Patra's Lead Youth Ambassador. Tap the plum Leadership bottle — every card expands. 🖌️",
      },
      {
        keys: ["award", "win", "won", "competition", "hackathon", "finalist", "prize", "achievement", "honor", "deca", "trophy", "tbc"],
        reply:
          "The chrome-blue Awards bottle opens the full trophy shelf, ranked by prestige: Track Winner at the Anthropic Hackathon (Ode), 1st Place in the Wharton Undergraduate Public Policy Competition (TEACHPhilly), Finalist in the National McKinsey Case Competition (EduFuture), 2nd Place at The Boring Company's Not-A-Boring Competition with Penn Hyperloop, Finalist in the Accenture Case Competition, 5th Worldwide at DECA International (ICDC), and Top 3 in the Congressional App Challenge (Echo Eyes). 🏆",
      },
      {
        keys: ["innovation", "patent", "experiment", "ai agent", "timeline", "journey", "story so far"],
        reply:
          "Her timeline runs through the About Me section — CoreWeave agents in 2026, Penn M&T, the Anthropic Hackathon win, graduating salutatorian, Echo Eyes, and founding Lunar Llamas with its patent-pending design back in 2020. Tap the pearl About Me bottle for the full run. ✨",
      },
      {
        keys: ["contact", "email", "reach", "hire", "hiring", "connect", "linkedin", "github", "touch", "talk", "collab"],
        reply:
          "The studio door is open! Email her at rmotewar@wharton.upenn.edu, or connect on LinkedIn at linkedin.com/in/ridhimamotewar — the lilac Contact bottle has all the links. 💌",
      },
      {
        keys: ["creativ", "art", "nail", "hobby", "draw", "paint", "fun", "karate", "writing", "vlog", "video", "fantasy", "instagram", "gallery"],
        reply:
          "Nail art is the main event — the rosé Creativity bottle opens a gallery of 10 sets she hand-painted herself, from Sapphire & Gold Leaf to Merlot Leopard. Tap any one to see it up close, or find more at @ridhima_nails. Off the clock she also paints, writes fantasy, does karate, and makes videos. 🎨",
      },
      {
        keys: ["hello", "hi", "hey", "namaste", "good morning", "good evening"],
        reply:
          "Hello, gorgeous! 💖 Pull up a chair at the vanity. Ask me anything about Ridhima — CoreWeave, her projects, Penn, or how to reach her.",
      },
      {
        keys: ["site", "website", "made", "how did", "theme", "3d"],
        reply:
          "This studio was hand-built with plain HTML, CSS, and JavaScript — no heavy frameworks. The bottles, paint transitions, and scratch-to-reveal nails are all custom CSS 3D and canvas work. Polished, like everything else here. ✨",
      },
      {
        keys: ["thank", "thanks", "bye", "goodbye"],
        reply: "Anytime! Come back soon — the studio always has a fresh coat waiting. 💅✨",
      },
    ],
  },
};

/* ═══════════ helpers ═══════════ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ═══════════ SECTION NAVIGATION + PAINT TRANSITION ═══════════ */
const overlay = $("#paint-overlay");
const swath = $(".paint-swath");
let transitioning = false;
let targetPanel = null;

function showPanel(id) {
  $$(".panel").forEach((p) => {
    const active = p.id === id;
    p.classList.toggle("active", active);
    p.setAttribute("aria-hidden", String(!active));
  });
  window.scrollTo({ top: 0, behavior: "instant" });
}

function paintTransition(id, color) {
  if (reducedMotion) { showPanel(id); return; }
  // Record the destination first: if a navigation lands mid-animation (browser back,
  // or an impatient second click), the in-flight sweep retargets instead of being dropped.
  targetPanel = id;
  if (transitioning) return;
  transitioning = true;
  overlay.style.setProperty("--swath-color", color);
  swath.style.setProperty("--swath-color", color);
  overlay.classList.add("painting");

  let covered = false, done = false;
  const cover = () => {
    if (covered) return;
    covered = true;
    showPanel(targetPanel);
    const sweepOut = swath.animate(
      [{ transform: "translateX(0%)" }, { transform: "translateX(115%)" }],
      { duration: 620, easing: "cubic-bezier(0.6, 0, 0.35, 1)", fill: "forwards", delay: 120 }
    );
    sweepOut.onfinish = finish;
    setTimeout(finish, 1800); // watchdog: complete even if animations are paused (hidden tab)
  };
  const finish = () => {
    if (done) return;
    done = true;
    overlay.classList.remove("painting");
    transitioning = false;
    // a navigation that arrived after the swath had already passed still lands
    if (targetPanel !== activePanelId()) showPanel(targetPanel);
  };

  const sweepIn = swath.animate(
    [{ transform: "translateX(-130%)" }, { transform: "translateX(0%)" }],
    { duration: 620, easing: "cubic-bezier(0.6, 0, 0.3, 1)", fill: "forwards" }
  );
  sweepIn.onfinish = cover;
  setTimeout(cover, 1400); // watchdog
}

function goTo(id, sourceBottle) {
  const color =
    sourceBottle?.style.getPropertyValue("--polish").trim() ||
    getComputedStyle(document.documentElement).getPropertyValue("--rose").trim() ||
    "#e8899f";

  if (sourceBottle && !reducedMotion) {
    sourceBottle.classList.add("open");
    setTimeout(() => {
      paintTransition(id, color);
      setTimeout(() => sourceBottle.classList.remove("open"), 800);
    }, 420);
  } else {
    paintTransition(id, color);
  }
}

/* Bottle color per section, for transitions not started from a bottle */
const SECTION_COLORS = { studio: "#cbb59f" };
$$(".bottle").forEach((b) => {
  SECTION_COLORS[b.dataset.goto] = b.style.getPropertyValue("--polish").trim();
});

function activePanelId() {
  return $(".panel.active")?.id || "studio";
}

/* Where we're headed — the in-flight destination during a transition, else what's on screen */
function pendingPanelId() {
  return transitioning && targetPanel ? targetPanel : activePanelId();
}

$$("[data-goto]").forEach((el) => {
  el.addEventListener("click", () => {
    const id = el.dataset.goto;
    if (id === pendingPanelId()) return;
    // record the section in history so the browser back/forward buttons work
    history.pushState(null, "", id === "studio" ? location.pathname + location.search : `#${id}`);
    goTo(id, el.classList.contains("bottle") ? el : null);
  });
});

function hashPanelId() {
  const id = location.hash.slice(1);
  return id && document.getElementById(id)?.classList.contains("panel") ? id : "studio";
}

addEventListener("popstate", () => {
  const id = hashPanelId();
  if (id === pendingPanelId()) return;
  paintTransition(id, SECTION_COLORS[id] || "#e8899f");
});

// deep link: honor a #section hash on first load, without animation
if (hashPanelId() !== "studio") showPanel(hashPanelId());

/* ═══════════ SPARKLES ═══════════ */
(function sparkles() {
  if (reducedMotion) return;
  const canvas = $("#sparkle-canvas");
  const ctx = canvas.getContext("2d");
  let w, h, parts = [];

  function resize() {
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;
  }
  resize();
  addEventListener("resize", resize);

  const COUNT = innerWidth < 700 ? 26 : 48;
  for (let i = 0; i < COUNT; i++) {
    parts.push({
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      r: 0.6 + Math.random() * 1.6,
      tw: Math.random() * Math.PI * 2,
      sp: 0.004 + Math.random() * 0.012,
      drift: 0.05 + Math.random() * 0.12,
      hue: [340, 265, 45][i % 3],
    });
  }

  let running = true;
  document.addEventListener("visibilitychange", () => (running = !document.hidden));

  (function tick() {
    requestAnimationFrame(tick);
    if (!running) return;
    ctx.clearRect(0, 0, w, h);
    for (const p of parts) {
      p.tw += p.sp * 16;
      p.y -= p.drift;
      if (p.y < -4) { p.y = h + 4; p.x = Math.random() * w; }
      const a = 0.18 + 0.5 * Math.abs(Math.sin(p.tw));
      ctx.beginPath();
      ctx.fillStyle = `hsla(${p.hue}, 70%, 78%, ${a})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
  })();
})();

/* ═══════════ SCRATCH-TO-REVEAL NAILS ═══════════ */
$$(".reveal-nail").forEach((fig) => {
  const canvas = $(".nail-canvas", fig);
  const shape = $(".nail-shape", fig);
  const color = fig.dataset.polish || "#e8899f";
  const ctx = canvas.getContext("2d");
  let cleared = false, strokes = 0;

  function paintCoat() {
    const r = shape.getBoundingClientRect();
    canvas.width = Math.max(1, Math.round(r.width));
    canvas.height = Math.max(1, Math.round(r.height));
    const g = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    g.addColorStop(0, shade(color, 30));
    g.addColorStop(0.5, color);
    g.addColorStop(1, shade(color, -25));
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // glossy stripe + sparkle flecks
    ctx.fillStyle = "rgba(255,255,255,0.28)";
    ctx.beginPath();
    ctx.ellipse(canvas.width * 0.28, canvas.height * 0.3, canvas.width * 0.09, canvas.height * 0.26, -0.2, 0, Math.PI * 2);
    ctx.fill();
    for (let i = 0; i < 40; i++) {
      ctx.fillStyle = `rgba(255,255,255,${0.25 + Math.random() * 0.5})`;
      ctx.beginPath();
      ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 0.6 + Math.random() * 1.1, 0, Math.PI * 2);
      ctx.fill();
    }
    // hint text
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.font = "600 11px Outfit, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("D R A G   T O", canvas.width / 2, canvas.height / 2 - 8);
    ctx.fillText("R E V E A L", canvas.width / 2, canvas.height / 2 + 10);
  }

  function shade(hex, pct) {
    const n = parseInt(hex.slice(1), 16);
    const c = (v) => Math.min(255, Math.max(0, v + Math.round(2.55 * pct)));
    return `rgb(${c(n >> 16)}, ${c((n >> 8) & 255)}, ${c(n & 255)})`;
  }

  function erase(x, y) {
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    if (++strokes % 14 === 0) checkCleared();
  }

  function checkCleared() {
    if (cleared) return;
    const step = 12;
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let empty = 0, total = 0;
    for (let y = 0; y < canvas.height; y += step) {
      for (let x = 0; x < canvas.width; x += step) {
        total++;
        if (data[(y * canvas.width + x) * 4 + 3] < 40) empty++;
      }
    }
    if (empty / total > 0.55) {
      cleared = true;
      canvas.classList.add("cleared");
    }
  }

  let down = false;
  canvas.addEventListener("pointerdown", (e) => {
    down = true;
    canvas.setPointerCapture(e.pointerId);
    const r = canvas.getBoundingClientRect();
    erase(e.clientX - r.left, e.clientY - r.top);
  });
  canvas.addEventListener("pointermove", (e) => {
    if (!down) return;
    const r = canvas.getBoundingClientRect();
    erase(e.clientX - r.left, e.clientY - r.top);
  });
  addEventListener("pointerup", () => (down = false));

  // script sits at the end of <body>, so layout is ready — paint immediately
  paintCoat();
  let rsTimer;
  addEventListener("resize", () => {
    if (cleared) return;
    clearTimeout(rsTimer);
    rsTimer = setTimeout(paintCoat, 250);
  });
});

/* ═══════════ PROJECT GALLERY ═══════════ */
const gallery = $("#project-gallery");

SITE_CONTENT.projects.forEach((p) => {
  const card = document.createElement("button");
  card.className = "nail-card";
  card.setAttribute("aria-haspopup", "dialog");
  // Back face: a company logo card (internal work with no shareable
  // screenshot, e.g. CoreWeave), else the project's own picture, else a
  // designed accent card listing its sub-systems.
  const back = p.logo
    ? `<span class="card-back card-back-logo">
        <span class="logo-wrap"><img src="${p.logo}" alt="${p.title} logo" loading="lazy" /></span>
        <span class="card-back-label card-back-label-light">${p.title}<em>Click for the case study →</em></span>
      </span>`
    : p.flip
    ? `<span class="card-back" style="background-image:url('${p.flip}')">
        <span class="card-back-label">${p.title}<em>Click for the case study →</em></span>
      </span>`
    : `<span class="card-back card-back-fallback" style="--card-accent:${p.accent}">
        <span class="back-list">${(p.techGroups || []).map((g) => `<span>${g.h}</span>`).join("")}</span>
        <span class="card-back-label">${p.title}<em>Click for the case study →</em></span>
      </span>`;
  card.innerHTML = `
    <span class="card-inner">
      <span class="card-front">
        <span class="card-shade">${p.tag}</span>
        <span class="card-title">${p.title}</span>
        <span class="card-teaser">${p.teaser}</span>
        <span class="card-cta">Read the case study</span>
      </span>
      ${back}
    </span>`;
  card.addEventListener("click", () => openModal(p));
  gallery.appendChild(card);
});

/* ═══════════ MODAL ═══════════ */
const modalBackdrop = $("#project-modal");
const modal = $(".modal", modalBackdrop);
let lastFocus = null;

/* Pipeline diagrams are HTML rather than SVG so they reflow on narrow screens */
function diagramHTML(d, accent) {
  const steps = d.steps
    .map(
      (s, i) => `<div class="pipe-step" style="--accent:${accent}">
        <span class="pipe-n">${String(i + 1).padStart(2, "0")}</span>
        <strong>${s.t}</strong>
        <span class="pipe-sub">${s.s}</span>
      </div>`
    )
    .join('<span class="pipe-arrow" aria-hidden="true">→</span>');
  return `<figure class="tech-diagram"><div class="pipe">${steps}</div>${
    d.caption ? `<figcaption>${d.caption}</figcaption>` : ""
  }</figure>`;
}

/* YouTube videos, Google Slides decks, and raw Drive video files, embedded
   inline rather than linked out. Note: a Slides/Drive embed only renders for
   visitors if the file's sharing is set to "Anyone with the link can view" —
   a Drive file shared only with specific people will show a sign-in wall
   to the public. */
function embedHTML(embed) {
  if (!embed) return "";
  const srcByType = {
    youtube: `https://www.youtube-nocookie.com/embed/${embed.id}`,
    slides: `https://docs.google.com/presentation/d/${embed.id}/embed?start=false&loop=false&delayms=3000`,
    drive: `https://drive.google.com/file/d/${embed.id}/preview`,
  };
  return `<figure class="tech-embed">
    <div class="embed-frame ${embed.type === "slides" ? "embed-slides" : ""}">
      <iframe src="${srcByType[embed.type]}" title="${embed.title || ""}" loading="lazy" allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>
    ${embed.caption ? `<figcaption>${embed.caption}</figcaption>` : ""}
  </figure>`;
}

function mediaHTML(p) {
  let html = embedHTML(p.embed);
  html += p.diagram ? diagramHTML(p.diagram, p.accent) : "";
  (p.media || []).forEach((m) => {
    html += `<figure class="tech-shot">
      <img src="${m.img}" alt="${m.caption}" loading="lazy" />
      <figcaption>${m.caption}</figcaption>
    </figure>`;
  });
  return html;
}

/* "How it works" renders as grouped sub-headed bullet sets when a project
   defines techGroups (for multi-part builds), or a flat bullet list otherwise. */
function techHTML(p) {
  if (p.techGroups?.length) {
    return p.techGroups
      .map((g) => `<div class="tech-group"><h5>${g.h}</h5><ul>${g.items.map((i) => `<li>${i}</li>`).join("")}</ul></div>`)
      .join("");
  }
  const tech = p.tech || [];
  return tech.length ? `<ul>${tech.map((t) => `<li>${t}</li>`).join("")}</ul>` : "";
}

function openModal(p) {
  lastFocus = document.activeElement;
  $(".modal-art", modal).style.background = p.accent;
  $(".modal-shade", modal).textContent = p.tag;
  $("#modal-title").textContent = p.title;
  $(".modal-desc", modal).textContent = p.description;
  $(".modal-media", modal).innerHTML = mediaHTML(p);
  const hasTech = Boolean(p.techGroups?.length || p.tech?.length);
  $(".tech-head", modal).hidden = !hasTech;
  $(".modal-tech", modal).innerHTML = techHTML(p);
  $(".modal-tools", modal).innerHTML = p.tools.map((t) => `<li>${t}</li>`).join("");
  $(".modal-impact", modal).innerHTML = p.impact.map((i) => `<li>${i}</li>`).join("");
  $(".modal-link", modal).innerHTML = p.link
    ? `<a href="${p.link.url}" target="_blank" rel="noopener">${p.link.label} ↗</a>`
    : "";
  modalBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
  modal.scrollTop = 0;
  $(".modal-close", modal).focus();
}

function closeModal() {
  modalBackdrop.hidden = true;
  document.body.style.overflow = "";
  $(".modal-media", modal).innerHTML = ""; // stop any playing video/embed
  lastFocus?.focus();
}

$(".modal-close", modal).addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", (e) => { if (e.target === modalBackdrop) closeModal(); });
addEventListener("keydown", (e) => { if (e.key === "Escape" && !modalBackdrop.hidden) closeModal(); });

/* ═══════════ EXPANDABLE LEADERSHIP CARDS ═══════════ */
$$(".lead-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".lead-card");
    const open = card.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
});

/* ═══════════ NAIL ART GALLERY + LIGHTBOX ═══════════ */
const nailGallery = $("#nail-gallery");
const lightbox = $("#nail-lightbox");
const lightboxImg = $("#lightbox-img");
let lbIndex = 0, lbLastFocus = null;

SITE_CONTENT.nailArt.forEach((set, i) => {
  const tile = document.createElement("button");
  tile.className = "nail-tile";
  tile.style.setProperty("--tint", set.tint);
  tile.setAttribute("aria-haspopup", "dialog");
  tile.innerHTML = `
    <img src="assets/nails/${set.file}" alt="${set.name} nail art set" loading="lazy" />
    <span class="tile-meta">
      <span class="tile-name">${set.name}</span>
      <span class="tile-date">${set.date}</span>
    </span>`;
  tile.addEventListener("click", () => openLightbox(i));
  nailGallery.appendChild(tile);
});

function showSet(i) {
  const n = SITE_CONTENT.nailArt.length;
  lbIndex = (i + n) % n;
  const set = SITE_CONTENT.nailArt[lbIndex];
  lightboxImg.src = `assets/nails/${set.file}`;
  lightboxImg.alt = `${set.name} nail art set`;
  $("#lightbox-title").textContent = set.name;
  $(".lb-date", lightbox).textContent = set.date;
}

function openLightbox(i) {
  lbLastFocus = document.activeElement;
  showSet(i);
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  $(".modal-close", lightbox).focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
  lbLastFocus?.focus();
}

$(".modal-close", lightbox).addEventListener("click", closeLightbox);
$(".lb-prev", lightbox).addEventListener("click", () => showSet(lbIndex - 1));
$(".lb-next", lightbox).addEventListener("click", () => showSet(lbIndex + 1));
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });

addEventListener("keydown", (e) => {
  if (lightbox.hidden) return;
  if (e.key === "Escape") closeLightbox();
  else if (e.key === "ArrowLeft") showSet(lbIndex - 1);
  else if (e.key === "ArrowRight") showSet(lbIndex + 1);
});

/* ═══════════ CHATBOT ═══════════ */
/* Real AI mode: paste your Cloudflare Worker URL here (see cloudflare-worker/README.md).
   Left empty, the chat uses the built-in scripted answers instead — and if the
   Worker ever errors, it silently falls back to them too. */
const CHAT_API_URL = "https://nail-artist-ai.motewar-ridhima.workers.dev/";

const fab = $("#chat-fab");
const chatPanel = $("#chat-panel");
const chatMessages = $("#chat-messages");
const chatChips = $("#chat-chips");
const chatForm = $("#chat-form");
const chatInput = $("#chat-input");
let chatStarted = false;
const chatHistory = []; // {role, content} turns sent to the real AI for context

function addMsg(text, who) {
  const div = document.createElement("div");
  div.className = `msg ${who}`;
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return div;
}

function showTyping() {
  const typing = document.createElement("div");
  typing.className = "msg bot typing";
  typing.innerHTML = "<i></i><i></i><i></i>";
  chatMessages.appendChild(typing);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return typing;
}

function botReply(text) {
  const typing = showTyping();
  setTimeout(() => {
    typing.remove();
    addMsg(text, "bot");
    chatHistory.push({ role: "assistant", content: text });
  }, 500 + Math.min(900, text.length * 6));
}

function scriptedAnswer(q) {
  const text = q.toLowerCase();
  let best = null, bestScore = 0;
  for (const intent of SITE_CONTENT.bot.intents) {
    const score = intent.keys.reduce((s, k) => s + (text.includes(k) ? 1 : 0), 0);
    if (score > bestScore) { bestScore = score; best = intent; }
  }
  botReply(best ? best.reply : SITE_CONTENT.bot.fallback);
}

async function answer(q) {
  chatHistory.push({ role: "user", content: q });
  if (!CHAT_API_URL) return scriptedAnswer(q);

  const typing = showTyping();
  try {
    const res = await fetch(CHAT_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: chatHistory.slice(-12) }),
    });
    const data = await res.json();
    typing.remove();
    if (res.ok && data.reply) {
      addMsg(data.reply, "bot");
      chatHistory.push({ role: "assistant", content: data.reply });
      return;
    }
  } catch (e) {
    typing.remove();
  }
  scriptedAnswer(q); // Worker unavailable — degrade gracefully
}

function renderChips() {
  chatChips.innerHTML = "";
  SITE_CONTENT.bot.chips.forEach((c) => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = c;
    b.addEventListener("click", () => { addMsg(c, "user"); answer(c); });
    chatChips.appendChild(b);
  });
}

fab.addEventListener("click", () => {
  chatPanel.hidden = false;
  fab.classList.add("hidden");
  if (!chatStarted) {
    chatStarted = true;
    botReply(SITE_CONTENT.bot.greeting);
    renderChips();
  }
  chatInput.focus();
});

$("#chat-close").addEventListener("click", () => {
  chatPanel.hidden = true;
  fab.classList.remove("hidden");
});

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const q = chatInput.value.trim();
  if (!q) return;
  chatInput.value = "";
  addMsg(q, "user");
  answer(q);
});
