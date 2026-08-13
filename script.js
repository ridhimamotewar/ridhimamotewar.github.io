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
      shade: "Shade 01 · Liquid Chrome",
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
      art: { base: "#dfe3ea", accent: "#8fa3b8", style: "chrome" },
    },
    {
      id: "ode",
      shade: "Shade 02 · Holo Voice",
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
      art: { base: "#e6e3f5", accent: "#b3a3dd", style: "holo" },
    },
    {
      id: "echo-eyes",
      shade: "Shade 03 · Clear Sight",
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
      art: { base: "#f6ede6", accent: "#d9b36c", style: "french" },
    },
    {
      id: "lunar-llamas",
      shade: "Shade 04 · Pearl of Purpose",
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
      art: { base: "#fdf6ec", accent: "#e3c98f", style: "pearl" },
    },
    {
      id: "rise-evals",
      shade: "Shade 05 · Velvet Benchmark",
      title: "RISE Data Labs — Agentic Evals",
      teaser: "A scoring framework for AI shopping agents, benchmarked across frontier LLMs.",
      description:
        "Consulting through Product Space @ Penn, I built an evaluation framework to assess agentic shopping models across actionability, accuracy, and personalization — then analyzed frontier LLMs from OpenAI, Anthropic, Google, and xAI with a scalable scoring system.",
      tools: ["LLM evaluation", "Python", "Prompt engineering", "Product strategy"],
      impact: [
        "Scalable scoring system across three evaluation dimensions",
        "Benchmarked four frontier model families head to head",
        "Delivered as a working framework, not just a report",
      ],
      art: { base: "#efe0ee", accent: "#8d5a8f", style: "velvet" },
    },
    {
      id: "gerber-kawasaki",
      shade: "Shade 06 · Gilded Portfolio",
      title: "Gerber Kawasaki ML Framework",
      teaser: "An ML-driven investment recommendation pitch, projecting 77.2% ROI.",
      description:
        "For Gerber Kawasaki Wealth and Investment Management, I pitched an ML-driven recommendation framework to automate new-client investment recommendations using historical portfolio performance data — designing the model architecture and an implementation roadmap for firm-wide adoption.",
      tools: ["Machine learning", "Python", "Portfolio analytics", "Pitching & roadmapping"],
      impact: [
        "Projected 77.2% ROI for firm-wide adoption",
        "Full model architecture and implementation roadmap delivered",
        "Automated a manual, high-stakes advisory workflow",
      ],
      art: { base: "#fbe9ef", accent: "#e8899f", style: "floral" },
    },
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
        keys: ["project", "work", "portfolio", "built", "case study", "gallery", "app", "ode", "echo", "lunar", "rise", "gerber"],
        reply:
          "Six signature designs in the gallery: the CoreWeave FP&A Agent Suite (3 agents, 2+ analyst-weeks saved), Ode (eye-driven speech — Anthropic Hackathon track winner), Echo Eyes (app for the visually impaired — Congressional App Challenge Top 3), Lunar Llamas (patent-pending hygiene units for the unhoused), RISE Data Labs agentic evals, and an ML framework for Gerber Kawasaki projecting 77.2% ROI. Tap the gold Projects bottle! 💅",
      },
      {
        keys: ["skill", "stack", "tech", "tools", "language", "code", "react", "python", "java", "ocaml", "figma"],
        reply:
          "Her kit: Python, Java, JavaScript, OCaml, and React Native with Expo — plus AI agents and LLM evaluation, Figma, Canva, and CAD. Equal parts brush and keyboard: she's happiest where engineering meets finance meets craft.",
      },
      {
        keys: ["lead", "leader", "team", "mentor", "president", "vice", "manage", "club", "society", "vita", "product space", "robotics", "nonprofit", "501c3", "volunteer"],
        reply:
          "On campus she's Vice President of Product Space @ Penn (teaching 18 Product Fellows, and she ran Penn's first Product-A-Thon) and an officer with the Volunteer Income Tax Association, which delivered $3M in refunds to Philadelphia households. She also co-founded Lunar Llamas, a 501c3 serving 800+ people, and captained a FIRST Robotics team that won $10K in grants from NASA and Google. 🖌️",
      },
      {
        keys: ["award", "win", "won", "competition", "hackathon", "finalist", "prize", "achievement", "honor"],
        reply:
          "The trophy shelf: Track Winner at the Anthropic Hackathon (Ode), Top 3 Finalist in the Congressional App Challenge (Echo Eyes), Winner of the Wharton Undergraduate Public Policy Competition, and Finalist in both the National McKinsey and Accenture case competitions. 🏆",
      },
      {
        keys: ["contact", "email", "reach", "hire", "hiring", "connect", "linkedin", "github", "touch", "talk", "collab"],
        reply:
          "The studio door is open! Email her at rmotewar@wharton.upenn.edu, or connect on LinkedIn at linkedin.com/in/ridhimamotewar — the lilac Contact bottle has all the links. 💌",
      },
      {
        keys: ["creativ", "art", "nail", "hobby", "draw", "paint", "fun", "karate", "writing", "vlog", "video", "fantasy"],
        reply:
          "Beyond the code: nail artistry (hand-painted sets — this site's whole inspiration), painting, fantasy writing and storytelling, karate, and video-making. The rosé Creativity bottle has the details. 🎨",
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

function showPanel(id) {
  $$(".panel").forEach((p) => {
    const active = p.id === id;
    p.classList.toggle("active", active);
    p.setAttribute("aria-hidden", String(!active));
  });
  window.scrollTo({ top: 0, behavior: "instant" });
}

function paintTransition(id, color) {
  if (transitioning) return;
  if (reducedMotion) { showPanel(id); return; }
  transitioning = true;
  overlay.style.setProperty("--swath-color", color);
  swath.style.setProperty("--swath-color", color);
  overlay.classList.add("painting");

  let covered = false, done = false;
  const cover = () => {
    if (covered) return;
    covered = true;
    showPanel(id);
    const sweepOut = swath.animate(
      [{ transform: "translateX(0%)" }, { transform: "translateX(115%)" }],
      { duration: 620, easing: "cubic-bezier(0.6, 0, 0.35, 1)", fill: "forwards", delay: 120 }
    );
    sweepOut.onfinish = finish;
    setTimeout(finish, 1600); // watchdog: complete even if animations are paused (hidden tab)
  };
  const finish = () => {
    if (done) return;
    done = true;
    overlay.classList.remove("painting");
    transitioning = false;
  };

  const sweepIn = swath.animate(
    [{ transform: "translateX(-130%)" }, { transform: "translateX(0%)" }],
    { duration: 620, easing: "cubic-bezier(0.6, 0, 0.3, 1)", fill: "forwards" }
  );
  sweepIn.onfinish = cover;
  setTimeout(cover, 1200); // watchdog
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

$$("[data-goto]").forEach((el) => {
  el.addEventListener("click", () => {
    const id = el.dataset.goto;
    goTo(id, el.classList.contains("bottle") ? el : null);
  });
});

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

const NAIL_ART_STYLES = {
  french: (b, a) => `linear-gradient(180deg, ${a} 0%, ${a} 22%, ${b} 24%, ${b} 100%)`,
  chrome: (b, a) => `linear-gradient(135deg, #fff 0%, ${a} 30%, ${b} 50%, ${a} 68%, #f5f7fa 100%)`,
  floral: (b, a) =>
    `radial-gradient(9px 9px at 30% 30%, ${a} 45%, transparent 50%), radial-gradient(7px 7px at 62% 52%, ${a} 45%, transparent 50%), radial-gradient(8px 8px at 40% 74%, ${a} 45%, transparent 50%), radial-gradient(5px 5px at 72% 24%, ${a} 45%, transparent 50%), linear-gradient(170deg, ${b}, ${b})`,
  holo: (b, a) => `linear-gradient(120deg, #ffd6e8 0%, ${a} 25%, #c8e4f5 50%, ${a} 75%, #ffe9c8 100%)`,
  velvet: (b, a) => `radial-gradient(circle at 35% 25%, ${b} 0%, ${a} 75%)`,
  pearl: (b, a) => `radial-gradient(circle at 32% 26%, #fff 0%, ${b} 45%, ${a} 100%)`,
};

SITE_CONTENT.projects.forEach((p) => {
  const bg = NAIL_ART_STYLES[p.art.style](p.art.base, p.art.accent);
  const card = document.createElement("button");
  card.className = "nail-card";
  card.setAttribute("aria-haspopup", "dialog");
  card.innerHTML = `
    <span class="card-nail"><span class="nail-chip" style="background:${bg.replace(/"/g, "&quot;")}"></span></span>
    <span class="card-body">
      <span class="card-shade">${p.shade}</span>
      <h3>${p.title}</h3>
      <p>${p.teaser}</p>
    </span>
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

function openModal(p) {
  lastFocus = document.activeElement;
  $(".modal-art", modal).style.background = NAIL_ART_STYLES[p.art.style](p.art.base, p.art.accent);
  $(".modal-shade", modal).textContent = p.shade;
  $("#modal-title").textContent = p.title;
  $(".modal-desc", modal).textContent = p.description;
  $(".modal-tools", modal).innerHTML = p.tools.map((t) => `<li>${t}</li>`).join("");
  $(".modal-impact", modal).innerHTML = p.impact.map((i) => `<li>${i}</li>`).join("");
  modalBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
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
