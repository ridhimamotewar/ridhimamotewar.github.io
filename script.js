/* ═══════════════════════════════════════════════════════════
   PAINT MY STORY — interactions
   Edit SITE_CONTENT below to personalize projects & chatbot.
   ═══════════════════════════════════════════════════════════ */

const SITE_CONTENT = {
  name: "Ridhima Motewar",
  email: "motewar.ridhima@gmail.com",

  projects: [
    {
      id: "polished-commerce",
      shade: "Shade 01 · French Tip",
      title: "Polished Commerce",
      teaser: "A boutique e-commerce redesign that turned browsers into buyers.",
      description:
        "A ground-up redesign of a boutique retail storefront. I rebuilt the browsing and checkout flows around a single idea: shopping should feel like being helped by a great stylist, not filling out a form. The result pairs an editorial product gallery with a two-step checkout.",
      tools: ["React", "TypeScript", "Stripe", "Figma", "Framer Motion"],
      impact: [
        "Checkout completion rate up 34% after launch",
        "Page weight cut by 41% through image and animation budgets",
        "Design system adopted by two sibling product teams",
      ],
      art: { base: "#f6ede6", accent: "#d9b36c", style: "french" },
    },
    {
      id: "chrome-insights",
      shade: "Shade 02 · Mirror Chrome",
      title: "Chrome Insights",
      teaser: "An analytics dashboard that makes dense data feel effortless.",
      description:
        "A data platform for operations teams drowning in spreadsheets. I designed and built the visualization layer — live charts, anomaly highlights, and a natural-language summary strip — so a morning glance replaces an hour of digging.",
      tools: ["Vue", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      impact: [
        "Daily reporting time reduced from ~60 to ~8 minutes",
        "Adopted by 2,000+ users in the first month",
        "Anomaly alerts caught three critical issues before customers did",
      ],
      art: { base: "#dfe3ea", accent: "#8fa3b8", style: "chrome" },
    },
    {
      id: "petal-notes",
      shade: "Shade 03 · Pressed Petal",
      title: "Petal Notes",
      teaser: "A journaling app where entries bloom into a garden of memories.",
      description:
        "A mindful journaling companion. Each entry becomes a petal in a slowly growing garden visualization — a gentle nudge that consistency, not length, is what matters. Built with offline-first storage and end-to-end encryption for total privacy.",
      tools: ["React Native", "SQLite", "Expo", "Lottie"],
      impact: [
        "4.8★ average rating across app stores",
        "60-day retention twice the category benchmark",
        "Featured in a curated 'apps for wellbeing' collection",
      ],
      art: { base: "#fbe9ef", accent: "#e8899f", style: "floral" },
    },
    {
      id: "holo-guide",
      shade: "Shade 04 · Holographic",
      title: "Holo Guide",
      teaser: "An AR wayfinding companion for sprawling campuses.",
      description:
        "An augmented-reality guide that overlays walking directions, room availability, and event pins onto a live camera view. I led the interaction design and shipped the AR overlay system, tuned to stay legible in bright sunlight and crowded halls.",
      tools: ["Unity", "ARKit", "C#", "Blender", "Figma"],
      impact: [
        "Wayfinding complaints at pilot campus dropped 70%",
        "Demoed to 5,000+ visitors during orientation week",
        "Won the university's innovation showcase",
      ],
      art: { base: "#e6e3f5", accent: "#b3a3dd", style: "holo" },
    },
    {
      id: "velvet-queue",
      shade: "Shade 05 · Velvet Matte",
      title: "Velvet Queue",
      teaser: "Event ticketing without the refresh-and-pray anxiety.",
      description:
        "A fair-queue ticketing flow for high-demand events. Instead of a chaotic scramble, visitors get a calm virtual waiting room with honest wait estimates and a guaranteed place in line. I designed the queue experience and built the real-time status layer.",
      tools: ["Next.js", "WebSockets", "Redis", "Tailwind CSS"],
      impact: [
        "Zero oversells across 12 launch events",
        "Support tickets during on-sales down 55%",
        "Waiting-room bounce rate under 4%",
      ],
      art: { base: "#efe0ee", accent: "#8d5a8f", style: "velvet" },
    },
    {
      id: "pearl-pay",
      shade: "Shade 06 · Pearl Shimmer",
      title: "Pearl Pay",
      teaser: "A fintech concept that makes splitting bills feel gracious.",
      description:
        "A concept study for social payments: splitting a dinner bill should feel like a warm gesture, not an awkward invoice. I explored flows for soft reminders, group tabs, and celebratory settle-up moments, validated through moderated user testing.",
      tools: ["Figma", "Protopie", "User research", "Illustration"],
      impact: [
        "9 of 10 test participants preferred it to their current app",
        "Case study cited in a product-design course syllabus",
        "Sparked two follow-up feature explorations with a partner team",
      ],
      art: { base: "#fdf6ec", accent: "#e3c98f", style: "pearl" },
    },
  ],

  // ── Chatbot knowledge base ──
  bot: {
    greeting:
      "Welcome to the studio! 💅 I'm the Nail Artist AI — Ridhima's front-desk concierge. Ask me about her work, skills, background, or how to get in touch.",
    fallback:
      "Hmm, that shade isn't in my collection yet! Try asking about Ridhima's projects, skills, background, leadership, or how to contact her — or tap one of the suggestions below.",
    chips: ["Who is Ridhima?", "Show me her projects", "What are her skills?", "Leadership experience?", "How do I contact her?"],
    intents: [
      {
        keys: ["who", "about", "ridhima", "yourself", "she", "her story", "background", "bio"],
        reply:
          "Ridhima is a designer-engineer who treats software like a hand-painted manicure — considered, glossy, and finished to the last 2%. She works across UI engineering, design systems, and motion, and yes, the nail-art theme comes from a real hobby. Open the About Me bottle for the full story! ✨",
      },
      {
        keys: ["project", "work", "portfolio", "built", "case study", "gallery", "app"],
        reply:
          "Her gallery holds six signature designs: Polished Commerce (e-commerce), Chrome Insights (analytics), Petal Notes (journaling), Holo Guide (AR wayfinding), Velvet Queue (ticketing), and Pearl Pay (fintech concept). Tap the gold Projects bottle to browse them — each card opens a full case study. 💅",
      },
      {
        keys: ["skill", "stack", "tech", "tools", "language", "code", "css", "react", "python", "design"],
        reply:
          "Her go-to kit: JavaScript/TypeScript, React and modern CSS, Python, Figma and design systems, plus motion design and micro-interactions. Equal parts brush and keyboard — she's happiest where design meets engineering.",
      },
      {
        keys: ["lead", "leader", "team", "mentor", "president", "manage", "club", "society"],
        reply:
          "Ridhima currently leads a cross-functional product pod of six, previously grew a tech & design society from 40 to 180 members as president, and has taught UI/UX workshops to 200+ students. Steady hands paint clean lines. 🖌️",
      },
      {
        keys: ["contact", "email", "reach", "hire", "hiring", "connect", "linkedin", "github", "touch", "talk", "collab"],
        reply:
          "The studio door is open! Email her at motewar.ridhima@gmail.com, or find her on LinkedIn and GitHub via the Contact section — tap the lilac Contact bottle to book your appointment. 💌",
      },
      {
        keys: ["innovation", "hackathon", "patent", "open source", "experiment", "ai"],
        reply:
          "Highlights from the Innovation shelf: a first-place hackathon build (an accessibility re-theming layer), AI-assisted design tooling that halved handoff time, open-source performance patches, and a patent-pending interaction idea. The chrome-blue Innovation bottle has the timeline!",
      },
      {
        keys: ["creativ", "art", "nail", "hobby", "draw", "paint", "fun", "coffee", "music"],
        reply:
          "Beyond code: visual design, generative art, storytelling, and real nail artistry — hand-painted sets are her weekend meditation (and this site's whole inspiration). Fueled by filter coffee and lo-fi playlists. 🎨",
      },
      {
        keys: ["hello", "hi", "hey", "namaste", "good morning", "good evening"],
        reply:
          "Hello, gorgeous! 💖 Pull up a chair at the vanity. Ask me anything about Ridhima — her projects, skills, leadership, or how to reach her.",
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
