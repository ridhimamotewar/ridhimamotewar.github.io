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
      teaser: "Three AI agents that gave CoreWeave's financial analysts two weeks back.",
      description:
        "As an FP&A intern at CoreWeave (Summer 2026), I designed and built three AI agents for the financial planning & analysis team — automating the recurring, manual workflows that ate into analysts' weeks: pulling, reconciling, and re-formatting the same data over and over. The agents took those cycles end to end, so analysts could spend their time on actual analysis.",
      tools: ["Python", "AI agents", "LLM APIs", "Prompt engineering", "FP&A workflows"],
      impact: [
        "Saved analysts 2+ weeks of manual work",
        "Three production agents shipped in a single internship",
        "Recurring FP&A workflows automated end to end",
      ],
      tech: [
        "One agent per workflow — three narrowly scoped agents instead of a single general-purpose assistant, so each one can be validated against a known-good manual result.",
        "Python orchestration around LLM APIs: the agents pull the source data, reconcile it, and assemble the outputs analysts previously stitched together by hand.",
        "Analyst-in-the-loop by design — the agents produce the draft, the FP&A team reviews and approves before anything is used.",
        "Benchmarked against the manual process it replaced: 2+ analyst-weeks recovered.",
      ],
      diagram: {
        caption: "The shape of each agent: source data in, reviewed deliverable out.",
        steps: [
          { t: "Source data", s: "Financial systems & reports" },
          { t: "Agent run", s: "Python + LLM tool calls" },
          { t: "Reconcile", s: "Cross-check and assemble" },
          { t: "Analyst review", s: "Human approves the draft" },
        ],
      },
      accent: "#8fa3b8",
    },
    {
      id: "ode",
      tag: "Anthropic Hackathon · 2025",
      title: "Ode",
      teaser: "Eye-driven presentations for speakers with Cerebral Palsy and ALS — Anthropic Hackathon track winner.",
      description:
        "An assistive presentation platform that converts three eye-driven inputs into real-time AI-generated speech through a Flask backend. Blink-based navigation and agent workflows let users deliver end-to-end presentations — slides, Q&A, and transcripts — with under one second of response time.",
      tools: ["Python", "Flask", "Eye tracking", "AI agents", "Speech synthesis"],
      impact: [
        "Track Winner at the Anthropic Hackathon",
        "Sub-1s response time from eye input to spoken output",
        "Full presentation flow: slides, live Q&A, and transcripts",
      ],
      tech: [
        "The entire interface runs on three eye-driven inputs plus a blink for navigation — no keyboard, no mouse, no caregiver required mid-presentation.",
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
      accent: "#b3a3dd",
    },
    {
      id: "echo-eyes",
      tag: "Congressional App Challenge · 2024",
      title: "Echo Eyes",
      teaser: "A mobile companion for the visually impaired — Congressional App Challenge Top 3.",
      description:
        "An accessible mobile app that assists the visually impaired community with OCR, object recognition, and multimodal prompting. I engineered the end-to-end solution — React Native front end with Python-based ML pipelines — and took it from idea to real-world adoption.",
      tools: ["React Native", "Python", "ML pipelines", "OCR", "Expo"],
      impact: [
        "Approved by 20+ schools for the blind",
        "Top 3 Finalist, Congressional App Challenge",
        "OCR, object recognition, and multimodal prompting in one flow",
      ],
      tech: [
        "React Native with Expo — one codebase serving both platforms, because splitting effort across two native apps wasn't realistic for the schools waiting on it.",
        "Python ML pipelines behind three distinct capabilities: OCR for reading text aloud, object recognition for describing surroundings, and multimodal prompting for open-ended questions about what the camera sees.",
        "Camera frame in, spoken description out — the whole interaction is designed to work without ever looking at the screen.",
        "Validated with the people who'd actually use it: 20+ schools for the blind approved it for their students.",
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
      accent: "#d9b36c",
    },
    {
      id: "lunar-llamas",
      tag: "501c3 · 2020 — Present",
      title: "Lunar Llamas",
      teaser: "A 501c3 with patent-pending hygiene units for the unhoused, live in 17 cities.",
      description:
        "A nonprofit I co-founded in 2020: portable, self-cleaning hygiene units addressing sanitation access for the unhoused. I led end-to-end product development — from CAD prototyping to regulatory approvals across 17 California cities — alongside fundraising and community partnerships with LavaMae and Good2Go.",
      tools: ["CAD", "Product development", "Regulatory approvals", "Fundraising", "Nonprofit ops"],
      impact: [
        "Patent-pending design, approved across 17 California cities",
        "$14.6K raised through fundraisers, donations, and partnerships",
        "11 community drives serving 800+ underprivileged individuals",
      ],
      tech: [
        "Split-plan layout: a self-cleaning wet side (36 × 60 in) kept separate from a dry changing side (48 × 60 in), so sanitation runs between users instead of relying on staff.",
        "Full unit at 84 in long × 96 in wide × 96 in tall (114 in with plumbing) — deliberately sized to tow and site in real city lots.",
        "Accessibility built into the dimensions: a 32-inch door and a fold-down bench 17 in off the ground for transfer.",
        "Floor sloped 1:48 to the drain — the maximum gentle grade that still drains — over an 18-inch crawl space housing the plumbing and cleaning system.",
        "CAD prototyping straight through regulatory approval in 17 California cities.",
      ],
      media: [
        {
          img: "assets/projects/lunar-floorplan.png",
          caption: "The unit's floor plan and dimensions — wet side, dry side, and equipment bay.",
        },
      ],
      accent: "#e3c98f",
    },
    {
      id: "penn-hyperloop",
      tag: "Penn Hyperloop × TBC",
      title: "Penn Hyperloop × The Boring Company",
      teaser: "Student engineering on real work for The Boring Company.",
      description:
        "As part of Penn Hyperloop, I contribute to the student team's engineering work for The Boring Company — applying the CAD, prototyping, and build discipline honed as a FIRST Robotics captain to full-scale tunneling and transit technology.",
      tools: ["CAD", "Engineering design", "Prototyping", "Cross-functional teamwork"],
      impact: [
        "2nd place at The Boring Company's competition",
        "One of Penn's flagship student engineering teams",
        "Robotics-honed fabrication instincts at real-world scale",
      ],
      tech: [
        "CAD and fabrication work with Penn Hyperloop, one of the university's flagship student engineering teams, building for The Boring Company.",
        "The same loop carried over from four years of FIRST Robotics: model it in CAD, machine it, test it, find where it fails, revise the model.",
        "Hands-on shop work — the parts get made, not just drawn.",
      ],
      accent: "#5b7a94",
    },
    {
      id: "dankmeyer",
      tag: "Prosthetics & Orthotics",
      title: "Dankmeyer Prosthetics & Orthotics",
      teaser: "Hands-on work where engineering meets the human body.",
      description:
        "Time on the bench at Dankmeyer, a prosthetics and orthotics practice — working hands-on with the devices patients wear every day and seeing how clinicians measure, fit, and tune them. It reframed engineering for me: tolerances stop being abstract when a millimeter changes how someone walks.",
      tools: ["Prosthetics & orthotics", "Fabrication", "Patient-centered design"],
      impact: [
        "Real devices for real patients — not classroom prototypes",
        "Grounded CAD and fabrication skills in clinical constraints",
        "Deepened the accessibility thread that runs through Ode and Echo Eyes",
      ],
      tech: [
        "Hands-on fabrication and finishing work on prosthetic and orthotic devices.",
        "Exposure to the full patient pipeline: measurement, fitting, alignment, and adjustment.",
        "Materials chosen per patient, not per spec sheet — foams, laminates, and componentry matched to a real person's life.",
      ],
      media: [
        {
          img: "assets/projects/dankmeyer-foot.jpg",
          caption: "At the bench, working on a prosthetic foot.",
        },
      ],
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
    { file: "cotton-candy.jpg",    name: "Cotton Candy",       date: "August 2022",   tint: "#e879a8" },
    { file: "pastel-waves.jpg",    name: "Pastel Waves",       date: "July 2022",     tint: "#5fbfc7" },
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
        keys: ["coreweave", "intern", "fp&a", "fpa", "finance team", "agents", "analyst"],
        reply:
          "Her freshest coat! ✨ In Summer 2026 Ridhima interned on CoreWeave's FP&A team, where she built three AI agents that automate recurring financial workflows — saving analysts more than two weeks of manual work. The full case study is the first card in the Projects gallery.",
      },
      {
        keys: ["who", "about", "ridhima", "yourself", "she", "her story", "background", "bio"],
        reply:
          "Ridhima is an M&T student at Penn — one of 50 selected worldwide — pursuing computer science at Penn Engineering and finance at Wharton (Class of 2029). Most recently she interned on CoreWeave's FP&A team building AI agents. She also co-founded a 501c3 with a patent-pending product, and yes, the nail art theme is a real hobby. Open the About Me bottle for the full story! ✨",
      },
      {
        keys: ["education", "study", "school", "college", "penn", "upenn", "wharton", "m&t", "mt program", "major", "degree", "university"],
        reply:
          "She's at the University of Pennsylvania in the Jerome Fisher Program in Management & Technology (M&T) — just 50 students selected worldwide. Dual degree: B.S.E. in Computer Science at Penn Engineering plus a B.S. in Economics with a finance concentration at Wharton, Class of 2029, and she's a Joseph Wharton Scholar. Before Penn she was salutatorian at Quarry Lane School with a 4.74 GPA. 🎓",
      },
      {
        keys: ["project", "work", "portfolio", "built", "case study", "gallery", "app", "ode", "echo", "lunar", "dankmeyer", "prosthetic"],
        reply:
          "Six pieces in the gallery: the CoreWeave FP&A Agent Suite (3 agents, 2+ analyst-weeks saved), Ode (eye-driven speech — Anthropic Hackathon track winner), Echo Eyes (app for the visually impaired — Congressional App Challenge Top 3), Lunar Llamas (patent-pending hygiene units for the unhoused), Penn Hyperloop's work for The Boring Company, and hands-on prosthetics work at Dankmeyer. Tap the gold Projects bottle! 💅",
      },
      {
        keys: ["skill", "stack", "tech", "tools", "language", "code", "react", "python", "java", "ocaml", "figma"],
        reply:
          "Her kit: Python, Java, JavaScript, OCaml, and React Native with Expo — plus AI agents and LLM evaluation, Figma, Canva, and CAD. Equal parts brush and keyboard: she's happiest where engineering meets finance meets craft.",
      },
      {
        keys: ["lead", "leader", "team", "mentor", "president", "vice", "manage", "club", "society", "vita", "product space", "robotics", "nonprofit", "501c3", "volunteer", "hyperloop", "boring company", "girls into vc", "board"],
        reply:
          "On campus she's Vice President of Product Space @ Penn (teaching 18 Product Fellows, and she ran Penn's first Product-A-Thon), an officer with the Volunteer Income Tax Association ($3M in refunds delivered), an engineer with Penn Hyperloop doing work for The Boring Company, and part of Girls into VC and the M&T Board. She also co-founded Lunar Llamas, a 501c3 serving 800+ people, and captained a FIRST Robotics team that won $10K in grants from NASA and Google. 🖌️",
      },
      {
        keys: ["award", "win", "won", "competition", "hackathon", "finalist", "prize", "achievement", "honor", "deca", "trophy", "tbc"],
        reply:
          "The chrome-blue Awards bottle opens the full trophy shelf: 2nd place at The Boring Company's competition with Penn Hyperloop, Track Winner at the Anthropic Hackathon (Ode), Winner of the Wharton Public Policy Competition, 5th worldwide at DECA's ICDC, Top 3 in the Congressional App Challenge, and Finalist in both the McKinsey and Accenture case competitions. 🏆",
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
          "Nail art is the main event — the rosé Creativity bottle opens a gallery of 12 sets she hand-painted herself, from Sapphire & Gold Leaf to Cotton Candy. Tap any one to see it up close, or find more at @ridhima_nails. Off the clock she also paints, writes fantasy, does karate, and makes videos. 🎨",
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
  card.innerHTML = `
    <span class="card-shade">${p.tag}</span>
    <span class="card-title">${p.title}</span>
    <span class="card-teaser">${p.teaser}</span>
    <span class="card-cta">Read the case study</span>`;
  card.addEventListener("click", () => openModal(p));

  // 3D tilt
  if (!reducedMotion && matchMedia("(hover: hover)").matches) {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const rx = ((e.clientY - r.top) / r.height - 0.5) * -10;
      const ry = ((e.clientX - r.left) / r.width - 0.5) * 12;
      card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });
    card.addEventListener("pointerleave", () => (card.style.transform = ""));
  }
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

function mediaHTML(p) {
  let html = p.diagram ? diagramHTML(p.diagram, p.accent) : "";
  (p.media || []).forEach((m) => {
    html += `<figure class="tech-shot">
      <img src="${m.img}" alt="${m.caption}" loading="lazy" />
      <figcaption>${m.caption}</figcaption>
    </figure>`;
  });
  return html;
}

function openModal(p) {
  lastFocus = document.activeElement;
  $(".modal-art", modal).style.background = p.accent;
  $(".modal-shade", modal).textContent = p.tag;
  $("#modal-title").textContent = p.title;
  $(".modal-desc", modal).textContent = p.description;
  $(".modal-media", modal).innerHTML = mediaHTML(p);
  const tech = p.tech || [];
  $(".tech-head", modal).hidden = !tech.length;
  $(".modal-tech", modal).innerHTML = tech.map((t) => `<li>${t}</li>`).join("");
  $(".modal-tools", modal).innerHTML = p.tools.map((t) => `<li>${t}</li>`).join("");
  $(".modal-impact", modal).innerHTML = p.impact.map((i) => `<li>${i}</li>`).join("");
  modalBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
  modal.scrollTop = 0;
  $(".modal-close", modal).focus();
}

function closeModal() {
  modalBackdrop.hidden = true;
  document.body.style.overflow = "";
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
const fab = $("#chat-fab");
const chatPanel = $("#chat-panel");
const chatMessages = $("#chat-messages");
const chatChips = $("#chat-chips");
const chatForm = $("#chat-form");
const chatInput = $("#chat-input");
let chatStarted = false;

function addMsg(text, who) {
  const div = document.createElement("div");
  div.className = `msg ${who}`;
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return div;
}

function botReply(text) {
  const typing = document.createElement("div");
  typing.className = "msg bot typing";
  typing.innerHTML = "<i></i><i></i><i></i>";
  chatMessages.appendChild(typing);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  setTimeout(() => {
    typing.remove();
    addMsg(text, "bot");
  }, 500 + Math.min(900, text.length * 6));
}

function answer(q) {
  const text = q.toLowerCase();
  let best = null, bestScore = 0;
  for (const intent of SITE_CONTENT.bot.intents) {
    const score = intent.keys.reduce((s, k) => s + (text.includes(k) ? 1 : 0), 0);
    if (score > bestScore) { bestScore = score; best = intent; }
  }
  botReply(best ? best.reply : SITE_CONTENT.bot.fallback);
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
