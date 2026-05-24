/* =====================================================
   SAIGOVARDHAN_OS — script.js
   All interactivity, animations, CLI, chatbot
   ===================================================== */

"use strict";
const EMAILJS_SERVICE_ID = "service_owu1xtr";
const EMAILJS_TEMPLATE_ID = "template_t4symn6";
const EMAILJS_PUBLIC_KEY = "FForwR73BRKtsHfCU";
// ── Resume Data ──────────────────────────────────────
const RESUME = {
  name: "Saigovardhan R. Sasanapuri",
  shortName: "SAIGOVARDHAN",
  email: "saigovardhan1304@gmail.com",
  phone: "9689820429",
  location: "Pune, India",
  university: "Vellore Institute Of Technology",
  degree: "BTech CSE",
  cgpa: "9.02",
  duration: "2022–2026",
  roles: ["Full-Stack Developer", "AI Engineer", "UI/UX Designer", "Azure Certified", "Competitive Programmer"],
  skills: {
    languages: ["C++", "Java", "Python", "SQL", "C# / .NET"],
    technologies: ["Azure AI", "ASP.NET Core", "Frontend Dev", "Machine Learning", "Figma / UI/UX"],
    tools: ["MongoDB", "Power BI", "Oracle SQL", "Flask / Streamlit", "Git / GitHub"]
  },
  experience: [
    { company: "Connex AI", role: "Frontend Developer & UX Designer Intern", period: "Sept 2025 – Present", desc: "Building AI-driven healthcare applications. UI/UX via Figma, frontend development.", stack: ["Figma", "Frontend", "AI Healthcare"] },
    { company: "ThinkSmart Systems Pvt. Ltd.", role: "Software Developer Intern", period: "May 2025 – June 2025", desc: "Built RESTful APIs with ASP.NET Core. Integrated frontend/backend using C#, HTML/CSS, Oracle SQL, MVC.", stack: ["ASP.NET Core", "C#", "Oracle SQL"] }
  ],
  projects: [
    { name: "Saigovardhan's Tuition Classes", pid: "001", tech: ".NET | ASP.NET Core | C# | SQL Server", desc: "Full-stack educational platform with RESTful APIs and MVC architecture." },
    { name: "AI Speech Analyzer", pid: "002", tech: "Whisper | spaCy | Python | Flask | TTS", desc: "AI-powered speech analysis with fluency, grammar checks, and TTS games." },
    { name: "WhatsApp Convo Analyser", pid: "003", tech: "Python | Streamlit | NLP", desc: "Analyze WhatsApp chats for sentiment, activity, and behavioral insights." },
    { name: "Medi-Thon Hospital File System", pid: "HACK", tech: "Cryptography | Web Dev | Encryption", desc: "Secure hospital file transfer system using cryptographic encryption/decryption." }
  ],
  certifications: ["Azure AI Engineer Associate (AI-102)", "Full-Stack Web Dev – Udemy", "JP Morgan Chase Simulation", "Cyber Security – LinkedIn"],
  competitive: ["LeetCode", "CodeForces", "CodeChef", "Kaggle (Top 5)"]
};

// ── Boot Log Messages ────────────────────────────────
const BOOT_LOGS = [
  "[  0.001]  BIOS POST sequence complete",
  "[  0.042]  Initializing SAIGOVARDHAN_OS kernel v2.0",
  "[  0.110]  Loading developer modules...",
  "[  0.245]  /boot/skills.h → LINKED",
  "[  0.380]  /boot/experience.log → MOUNTED",
  "[  0.520]  Azure AI subsystem → ONLINE",
  "[  0.660]  .NET runtime → INITIALIZED",
  "[  0.810]  Python interpreter → ACTIVE",
  "[  0.980]  Neural interface → CALIBRATING...",
  "[  1.200]  Matrix renderer → ACTIVE",
  "[  1.410]  Chatbot (JARVIS) → LOADED",
  "[  1.700]  Portfolio services → STARTING",
  "[  2.100]  All systems nominal. Welcome."
];

// ── DOM References ───────────────────────────────────
const bootScreen = document.getElementById("bootScreen");
const osContainer = document.getElementById("osContainer");
const bootLog = document.getElementById("bootLog");
const bootFill = document.getElementById("bootFill");
const bootPercent = document.getElementById("bootPercent");
const bootStatus = document.getElementById("bootStatus");
const cursorDot = document.getElementById("cursorDot");
const cursorRing = document.getElementById("cursorRing");
const cursorTrail = document.getElementById("cursorTrail");
const matrixCanvas = document.getElementById("matrixCanvas");
const compileOverlay = document.getElementById("compileOverlay");
const compileText = document.getElementById("compileText");
const systemTimeEl = document.getElementById("systemTime");
const uptimeEl = document.getElementById("uptime");
const heroNameEl = document.getElementById("heroName");
const heroRoleEl = document.getElementById("heroRole");

// ── Boot Sequence ────────────────────────────────────
let bootStartTime = Date.now();

async function runBootSequence() {
  const delay = (ms) => new Promise(r => setTimeout(r, ms));
  await delay(200);

  for (let i = 0; i < BOOT_LOGS.length; i++) {
    const line = document.createElement("div");
    line.className = "boot-log-line";
    line.textContent = BOOT_LOGS[i];
    bootLog.appendChild(line);
    bootLog.scrollTop = bootLog.scrollHeight;
    const pct = Math.round(((i + 1) / BOOT_LOGS.length) * 100);
    bootFill.style.width = pct + "%";
    bootPercent.textContent = pct + "%";
    await delay(140);
  }

  bootStatus.textContent = "BOOT COMPLETE — LAUNCHING OS...";
  await delay(600);

  bootScreen.style.transition = "opacity 0.6s";
  bootScreen.style.opacity = "0";
  await delay(600);
  bootScreen.style.display = "none";
  osContainer.style.display = "flex";

  initMatrix();
  initCursor();
  initSystemClock();
  initCpuGraph();
  initHeroTyping();
  initAboutJson();
  initSkillBars();
  populateUptime();
}

// ── Matrix Rain ──────────────────────────────────────
function initMatrix() {
  const ctx = matrixCanvas.getContext("2d");
  let cols, drops;

  function resize() {
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
    cols = Math.floor(matrixCanvas.width / 16);
    drops = Array(cols).fill(1);
  }
  resize();
  window.addEventListener("resize", resize);

  const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF<>/{}();=+-*#include<skills>deployexec";

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    ctx.font = "13px 'Share Tech Mono', monospace";

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const hue = Math.random() > 0.9 ? "#b400ff" : "#00f0ff";
      ctx.fillStyle = hue;
      ctx.fillText(char, i * 16, drops[i] * 16);
      if (drops[i] * 16 > matrixCanvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }

  setInterval(draw, 45);
}

// ── Custom Cursor ────────────────────────────────────
function initCursor() {
  let mx = 0, my = 0, trailX = 0, trailY = 0, ringX = 0, ringY = 0;

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX; my = e.clientY;
    cursorDot.style.left = mx + "px";
    cursorDot.style.top = my + "px";
  });

  function animateCursor() {
    ringX += (mx - ringX) * 0.12;
    ringY += (my - ringY) * 0.12;
    cursorRing.style.left = ringX + "px";
    cursorRing.style.top = ringY + "px";

    trailX += (mx - trailX) * 0.06;
    trailY += (my - trailY) * 0.06;
    cursorTrail.style.left = trailX + "px";
    cursorTrail.style.top = trailY + "px";

    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hover effect on interactive elements
  document.querySelectorAll("button, a, input, textarea, .project-card, .about-card, .log-card").forEach(el => {
    el.addEventListener("mouseenter", () => cursorRing.classList.add("hovering"));
    el.addEventListener("mouseleave", () => cursorRing.classList.remove("hovering"));
  });
}

// ── System Clock & Uptime ────────────────────────────
function initSystemClock() {
  function update() {
    const now = new Date();
    systemTimeEl.textContent = now.toTimeString().slice(0, 8);
  }
  update();
  setInterval(update, 1000);
}

function populateUptime() {
  const start = new Date("2022-09-01");
  function update() {
    const diff = Date.now() - start;
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    if (uptimeEl) uptimeEl.textContent = `${d}d ${h}h ${m}m`;
  }
  update();
  setInterval(update, 60000);
}

// ── CPU Graph ────────────────────────────────────────
function initCpuGraph() {
  const canvas = document.getElementById("cpuCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const values = Array(52).fill(0).map(() => Math.random() * 60 + 20);

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#00f0ff";
    ctx.shadowColor = "#00f0ff";
    ctx.shadowBlur = 6;
    ctx.lineWidth = 1.5;
    ctx.beginPath();

    for (let i = 0; i < values.length; i++) {
      const x = (i / (values.length - 1)) * canvas.width;
      const y = canvas.height - (values[i] / 100) * canvas.height;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Fill gradient
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "rgba(0, 240, 255, 0.2)");
    gradient.addColorStop(1, "rgba(0, 240, 255, 0.0)");
    ctx.fillStyle = gradient;
    ctx.fill();
  }

  setInterval(() => {
    values.shift();
    values.push(Math.random() * 60 + 20);
    draw();
  }, 150);
  draw();
}

// ── Hero Typing ──────────────────────────────────────
function initHeroTyping() {
  typeText(heroNameEl, RESUME.shortName, 60, () => {
    let ri = 0;
    function typeRole() {
      const role = RESUME.roles[ri % RESUME.roles.length];
      typeText(heroRoleEl, role, 55, () => {
        setTimeout(() => {
          eraseText(heroRoleEl, 35, () => { ri++; setTimeout(typeRole, 400); });
        }, 1800);
      });
    }
    typeRole();
  });
}

function typeText(el, text, speed, cb) {
  let i = 0;
  el.textContent = "";
  const t = setInterval(() => {
    el.textContent += text[i++];
    if (i === text.length) { clearInterval(t); if (cb) setTimeout(cb, 300); }
  }, speed);
}

function eraseText(el, speed, cb) {
  const t = setInterval(() => {
    el.textContent = el.textContent.slice(0, -1);
    if (el.textContent.length === 0) { clearInterval(t); if (cb) cb(); }
  }, speed);
}

// ── About JSON ───────────────────────────────────────
function initAboutJson() {
  const el = document.getElementById("aboutJson");
  if (!el) return;
  const json = JSON.stringify({
    name: RESUME.name,
    degree: RESUME.degree,
    cgpa: RESUME.cgpa,
    university: RESUME.university,
    location: RESUME.location,
    certifications: RESUME.certifications,
    competitive: RESUME.competitive
  }, null, 2);
  el.textContent = json;
}

// ── Skill Bars ───────────────────────────────────────
function initSkillBars() {
  const bars = document.querySelectorAll(".skill-bar-fill");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const pct = entry.target.getAttribute("data-pct");
        entry.target.style.width = pct + "%";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(bar => observer.observe(bar));
}

// ── Navigation ───────────────────────────────────────
let currentSection = "boot";
const compileLines = [
  "Compiling module...",
  "Resolving dependencies...",
  "Linking objects...",
  "Optimizing bytecode...",
  "Injecting DOM...",
  "Rendering interface...",
  "Module loaded."
];

function navigateTo(id) {
  if (id === currentSection) return;

  // Show compile overlay
  compileOverlay.classList.add("active");
  let li = 0;
  const compileInterval = setInterval(() => {
    compileText.innerHTML = `<span style="color:#ffcc00">gcc</span> <span style="color:#7ab8d4">${id}.cpp</span> → <span style="color:#00ff88">${compileLines[li++ % compileLines.length]}</span>`;
  }, 90);

  setTimeout(() => {
    clearInterval(compileInterval);
    compileOverlay.classList.remove("active");

    // Switch sections
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    document.getElementById("section-" + id).classList.add("active");
    document.querySelectorAll(".nav-cmd").forEach(b => b.classList.remove("active"));
    document.querySelector(`[data-section="${id}"]`)?.classList.add("active");

    currentSection = id;

    // Re-init skill bars on navigate
    if (id === "skills") {
      document.querySelectorAll(".skill-bar-fill").forEach(b => { b.style.width = "0"; });
      setTimeout(initSkillBars, 100);
    }
  }, 700);
}

// ── CLI Terminal ─────────────────────────────────────
const cliWindow = document.getElementById("cliWindow");
const cliBody = document.getElementById("cliBody");
const cliOutput = document.getElementById("cliOutput");
const cliInputEl = document.getElementById("cliInput");
let cliOpen = false;

const CLI_COMMANDS = {
  help: () => `<div class="cli-response">
Available commands:
  <span style="color:#00f0ff">help</span>           — show this menu
  <span style="color:#00f0ff">show skills</span>    — list all skills
  <span style="color:#00f0ff">open projects</span>  — navigate to projects
  <span style="color:#00f0ff">about</span>          — about Saigovardhan
  <span style="color:#00f0ff">whoami</span>         — developer info
  <span style="color:#00f0ff">contact</span>        — contact details
  <span style="color:#00f0ff">experience</span>     — work history
  <span style="color:#00f0ff">certifications</span> — list certs
  <span style="color:#00f0ff">hack</span>           — ???
  <span style="color:#00f0ff">clear</span>          — clear terminal
</div>`,

  whoami: () => `<div class="cli-response">
uid=1304(saigovardhan) gid=vit(btechcse) groups=azure,dotnet,python,ml,uiux
HOME=/portfolio  SHELL=/dev/brain  CGPA=8.95
</div>`,

  about: () => `<div class="cli-response">
${RESUME.name}
${RESUME.degree} @ ${RESUME.university} (CGPA: ${RESUME.cgpa}, ${RESUME.duration})
Location: ${RESUME.location}
</div>`,

  "show skills": () => {
    const all = [...RESUME.skills.languages, ...RESUME.skills.technologies, ...RESUME.skills.tools];
    return `<div class="cli-response">[ ${all.join(" | ")} ]</div>`;
  },

  "open projects": () => {
    navigateTo("projects");
    return `<div class="cli-response">→ Navigating to /deploy projects...</div>`;
  },

  contact: () => `<div class="cli-response">
EMAIL   : ${RESUME.email}
PHONE   : +91 ${RESUME.phone}
STATUS  : Open to opportunities
</div>`,

  experience: () => RESUME.experience.map(e =>
    `<div class="cli-response">[${e.period}] ${e.role} @ ${e.company}</div>`
  ).join(""),

  certifications: () => RESUME.certifications.map(c =>
    `<div class="cli-response">✓ ${c}</div>`
  ).join(""),

  hack: () => `<div class="cli-response" style="color:#ff2244">
╔═══════════════════════════════╗
║  EASTER EGG UNLOCKED  🔓       ║
║  "The best code is no code.    ║
║   The second best is clean."   ║
║  — Saigovardhan R. Sasanapuri  ║
╚═══════════════════════════════╝
</div>`,

  clear: () => {
    cliOutput.innerHTML = '<div class="cli-welcome">Terminal cleared — type <span class="highlight">help</span></div>';
    return null;
  }
};

function toggleCli() {
  cliOpen = !cliOpen;
  cliWindow.classList.toggle("open", cliOpen);
  if (cliOpen) cliInputEl.focus();
}

function closeCli() { cliOpen = false; cliWindow.classList.remove("open"); }
function minimizeCli() { cliOpen = false; cliWindow.classList.remove("open"); }

cliInputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const cmd = cliInputEl.value.trim().toLowerCase();
    if (!cmd) return;

    // Echo command
    const echo = document.createElement("div");
    echo.className = "cli-echo";
    echo.innerHTML = `<span class="cli-prompt-echo">saigovardhan@os:~$</span> ${escapeHtml(cmd)}`;
    cliOutput.appendChild(echo);

    const handler = CLI_COMMANDS[cmd];
    if (handler) {
      const result = handler();
      if (result) {
        const out = document.createElement("div");
        out.className = "cli-line";
        out.innerHTML = result;
        cliOutput.appendChild(out);
      }
    } else {
      const err = document.createElement("div");
      err.className = "cli-error";
      err.textContent = `bash: ${cmd}: command not found — try 'help'`;
      cliOutput.appendChild(err);
    }

    cliInputEl.value = "";
    cliOutput.scrollTop = cliOutput.scrollHeight;
  }
});

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ── Chatbot (JARVIS) ─────────────────────────────────
const chatbotWindow = document.getElementById("chatbotWindow");
const chatMessages = document.getElementById("chatMessages");
const chatInputEl = document.getElementById("chatInput");
let chatbotOpen = false;

// Knowledge base built from resume
const KNOWLEDGE = {
  skills: `Saigovardhan is skilled in C++, Java, Python, SQL, C#/.NET (languages), Azure AI, ASP.NET Core, Frontend Development, Machine Learning, Figma/UI/UX (technologies), and MongoDB, Power BI, Oracle SQL Server, Flask, Streamlit, Git/GitHub (tools).`,
  experience: `He has 2 internship experiences: (1) Frontend Developer & UX Designer at Connex AI, USA-Remote (Sept 2025–Present), building AI-driven healthcare apps with Figma and frontend dev. (2) Software Developer Intern at ThinkSmart Systems Pvt. Ltd., Pune (May 2025–June 2025), building RESTful APIs with ASP.NET Core, C#, and Oracle SQL.`,
  projects: `He has 3 main projects: (1) Saigovardhan's Tuition Classes — full-stack .NET educational platform. (2) AI Speech Analyzer — uses Whisper, spaCy, Flask with fluency and grammar analysis. (3) WhatsApp Convo Analyser — Streamlit app for chat sentiment/activity. Plus a Hackathon project: Hospital File Transfer System using cryptography.`,
  education: `He studies at Vellore Institute of Technology (VIT), pursuing BTech in Computer Science Core with a CGPA of 8.95, graduating in 2026.`,
  certifications: `He holds: Microsoft Azure AI Engineer Associate (AI-102), Full-Stack Web Development (Udemy), JP Morgan Chase Software Engineering Simulation, and Cyber Security Threat Landscape (LinkedIn).`,
  contact: `Email: saigovardhan1304@gmail.com | Phone: +91 9689820429 | Location: Pune, India`,
  hackathons: `Top 5 in Kaggle ML contest (IEEE Mission: Data Impossible, 70+ teams), developed Medi-Thon Hospital File Transfer System, and secured 4th place in a UI/UX Designathon (30+ teams).`
};

// Simple intent-matching chatbot (no external API needed for resume queries)
function getJarvisResponse(query) {
  const q = query.toLowerCase();

  if (q.includes("skill") || q.includes("language") || q.includes("technolog") || q.includes("know") || q.includes("stack")) {
    return `**SKILLS LOADED**\n\n${KNOWLEDGE.skills}\n\nHe's Microsoft Azure AI-102 certified — a strong signal of cloud AI expertise.`;
  }
  if (q.includes("experience") || q.includes("work") || q.includes("intern") || q.includes("job") || q.includes("company")) {
    return `**EXPERIENCE LOG**\n\n${KNOWLEDGE.experience}`;
  }
  if (q.includes("project") || q.includes("build") || q.includes("portf") || q.includes("app")) {
    return `**PROJECT MANIFEST**\n\n${KNOWLEDGE.projects}`;
  }
  if (q.includes("educat") || q.includes("college") || q.includes("degree") || q.includes("gpa") || q.includes("cgpa") || q.includes("vit")) {
    return `**EDUCATION MODULE**\n\n${KNOWLEDGE.education}`;
  }
  if (q.includes("cert") || q.includes("azure") || q.includes("microsoft")) {
    return `**CERTIFICATION STACK**\n\n${KNOWLEDGE.certifications}`;
  }
  if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("hire") || q.includes("connect")) {
    return `**CONTACT ENDPOINT**\n\n${KNOWLEDGE.contact}\n\nHe is open to new opportunities.`;
  }
  if (q.includes("hackathon") || q.includes("competition") || q.includes("kaggle") || q.includes("contest")) {
    return `**HACKATHON RECORDS**\n\n${KNOWLEDGE.hackathons}`;
  }
  if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("greet")) {
    return `Hello, Developer. I am JARVIS — Saigovardhan's AI portfolio assistant.\n\nAsk me about his skills, projects, experience, education, or certifications. I'm fully trained on his resume data. How can I assist?`;
  }
  if (q.includes("who") || q.includes("about") || q.includes("saigovar")) {
    return `**IDENTITY MODULE**\n\nSaigovardhan R. Sasanapuri is a Full-Stack Developer and AI Engineer from VIT Pune (CGPA 8.95). He specializes in .NET, Azure AI, Python, and UI/UX. Currently interning at Connex AI (USA), building AI healthcare applications. Azure AI-102 certified.`;
  }
  if (q.includes("available") || q.includes("opport") || q.includes("open")) {
    return `STATUS: ● OPEN TO OPPORTUNITIES\n\nSaigovardhan is actively looking for full-time roles or internships in Full-Stack Development, AI Engineering, or UI/UX Design. Reach out at saigovardhan1304@gmail.com`;
  }

  return `Query processed. I don't have a specific entry for "${query}" in my knowledge base. Try asking about his skills, experience, projects, education, or certifications. Or type 'help' in the terminal below.`;
}

function toggleChatbot() {
  chatbotOpen = !chatbotOpen;
  chatbotWindow.classList.toggle("open", chatbotOpen);
  if (chatbotOpen) chatInputEl.focus();
}

function closeChatbot() { chatbotOpen = false; chatbotWindow.classList.remove("open"); }

async function sendChatMessage() {
  const msg = chatInputEl.value.trim();
  if (!msg) return;
  chatInputEl.value = "";

  // User message
  appendChatMessage(msg, "user");

  // Typing indicator
  const typingEl = appendTypingIndicator();

  // Simulate AI processing delay
  await new Promise(r => setTimeout(r, 800 + Math.random() * 600));

  typingEl.remove();

  const response = getJarvisResponse(msg);
  appendChatMessage(response, "bot");
}

function appendChatMessage(text, role) {
  const wrapper = document.createElement("div");
  wrapper.className = role === "bot" ? "bot-message" : "user-message";

  if (role === "bot") {
    wrapper.innerHTML = `
      <span class="bot-avatar">⬡</span>
      <div class="bot-bubble">${text.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#00f0ff">$1</strong>').replace(/\n/g, '<br>')}</div>
    `;
  } else {
    wrapper.innerHTML = `<div class="user-bubble">${escapeHtml(text)}</div>`;
  }

  chatMessages.appendChild(wrapper);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function appendTypingIndicator() {
  const el = document.createElement("div");
  el.className = "bot-message";
  el.innerHTML = `
    <span class="bot-avatar">⬡</span>
    <div class="bot-bubble"><div class="typing-indicator">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div></div>
  `;
  chatMessages.appendChild(el);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return el;
}

chatInputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendChatMessage();
});

// ── Project Terminals (Modal) ────────────────────────
const projectDetails = [
  {
    title: "PID::001 — /tuition-platform",
    body: `<div class="t-line"><span class="t-prompt">$</span> <span class="t-cmd">cat README.md</span></div>
<br><strong style="color:#00f0ff">Saigovardhan's Tuition Classes</strong><br><br>
<span style="color:#7ab8d4">Tech Stack:</span> ASP.NET Core, C#, HTML/CSS, SQL Server, MVC<br><br>
A full-stack educational management platform featuring:<br>
• RESTful API architecture following MVC design pattern<br>
• Student enrollment and management system<br>
• Course and content delivery features<br>
• Backend powered by ASP.NET Core with C#<br>
• Database: Microsoft SQL Server<br><br>
<span style="color:#00ff88">STATUS: ● LIVE</span>`
  },
  {
    title: "PID::002 — /speech-ai-analyzer",
    body: `<div class="t-line"><span class="t-prompt">$</span> <span class="t-cmd">cat README.md</span></div>
<br><strong style="color:#00f0ff">AI Speech Analysis Application</strong><br><br>
<span style="color:#7ab8d4">Tech Stack:</span> OpenAI Whisper, spaCy, Python, Flask, TTS<br><br>
An AI-powered speech coaching application featuring:<br>
• Audio transcription via OpenAI Whisper<br>
• NLP analysis using spaCy for grammar checking<br>
• Fluency analysis and scoring system<br>
• Text-to-Speech (TTS) integration<br>
• Interactive speech games for practice<br>
• Modular Flask-based web UI<br><br>
<span style="color:#00ff88">STATUS: ● LIVE</span>`
  },
  {
    title: "PID::003 — /whatsapp-analyzer",
    body: `<div class="t-line"><span class="t-prompt">$</span> <span class="t-cmd">cat README.md</span></div>
<br><strong style="color:#00f0ff">WhatsApp Conversation Analyser</strong><br><br>
<span style="color:#7ab8d4">Tech Stack:</span> Python, Streamlit, NLP, Data Visualization<br><br>
A dynamic analytics platform for WhatsApp chats:<br>
• Upload any exported WhatsApp chat<br>
• Sentiment analysis per user and over time<br>
• Activity heatmaps and message frequency<br>
• Word clouds and vocabulary analysis<br>
• Group vs individual chat support<br>
• Interactive Streamlit-powered dashboard<br><br>
<span style="color:#00ff88">STATUS: ● LIVE</span>`
  },
  {
    title: "HACKATHON — /medi-thon-file-system",
    body: `<div class="t-line"><span class="t-prompt">$</span> <span class="t-cmd">cat README.md</span></div>
<br><strong style="color:#b400ff">Medi-Thon Hospital File Transfer System</strong><br><br>
<span style="color:#7ab8d4">Event:</span> Medi-Thon 2024 Hackathon<br>
<span style="color:#7ab8d4">Tech Stack:</span> Cryptography, Web Development, Encryption<br><br>
A secure healthcare file management system:<br>
• End-to-end encryption for medical file transfers<br>
• Secure transfer between hospital departments<br>
• Cryptographic techniques for data integrity<br>
• Web-based interface for department staff<br>
• Decryption system for authorized users only<br><br>
<span style="color:#ffcc00">★ HACKATHON PROJECT — MEDI-THON 2024</span>`
  }
];

function openProjectTerminal(idx) {
  const proj = projectDetails[idx];
  document.getElementById("modalTitle").textContent = proj.title;
  document.getElementById("modalBody").innerHTML = proj.body;
  document.getElementById("projectModal").classList.add("open");
}

function closeModal() {
  document.getElementById("projectModal").classList.remove("open");
}

function sendContact() {
  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const msg = document.getElementById("contactMsg").value.trim();
  const out = document.getElementById("formOutput");

  if (!name || !email || !msg) {
    out.innerHTML = `<span style="color:#ff2244">ERROR: Missing required fields — name, email, message</span>`;
    return;
  }

  out.innerHTML = `<span style="color:#ffcc00">Processing query...</span>`;

  const templateParams = {
    from_name: name,
    from_email: email,
    message: msg
  };

  emailjs.send("service_owu1xtr", "template_t4symn6", templateParams)
    .then(function (response) {
      out.innerHTML = `<span style="color:#00ff88">✓ Message packet sent successfully. Saigovardhan will respond within 24h.</span>`;

      document.getElementById("contactName").value = "";
      document.getElementById("contactEmail").value = "";
      document.getElementById("contactMsg").value = "";
    })
    .catch(function (error) {
      out.innerHTML = `<span style="color:#ff2244">ERROR: Failed to send message.</span>`;
      console.error("EmailJS Error:", error);
    });
}

// ── Background Music (generated tones) ───────────────
let audioCtx = null;
let musicPlaying = false;
let oscillators = [];

function toggleMusic() {
  const btn = document.getElementById("musicToggle");
  const icon = document.getElementById("musicIcon");

  if (!musicPlaying) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    playAmbientMusic();
    musicPlaying = true;
    btn.classList.add("playing");
    icon.textContent = "♫";
  } else {
    oscillators.forEach(o => { try { o.stop(); } catch (e) { } });
    oscillators = [];
    if (audioCtx) { audioCtx.close(); audioCtx = null; }
    musicPlaying = false;
    btn.classList.remove("playing");
    icon.textContent = "♪";
  }
}

function playAmbientMusic() {
  if (!audioCtx) return;
  const notes = [110, 146.83, 164.81, 220, 293.66];

  function playNote(freq, delay, dur) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime + delay);
    gain.gain.setValueAtTime(0, audioCtx.currentTime + delay);
    gain.gain.linearRampToValueAtTime(0.04, audioCtx.currentTime + delay + 0.2);
    gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + delay + dur);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(audioCtx.currentTime + delay);
    osc.stop(audioCtx.currentTime + delay + dur);
    oscillators.push(osc);
  }

  let t = 0;
  const loop = () => {
    if (!musicPlaying) return;
    notes.forEach((f, i) => {
      playNote(f, t + i * 0.5, 2.5);
    });
    t += 3.5;
    setTimeout(loop, 3500);
  };
  loop();
}

// ── Hover effect on all interactive elements ──────────
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("button, a, .project-card, .about-card, .log-card").forEach(el => {
    el.addEventListener("mouseenter", () => cursorRing?.classList.add("hovering"));
    el.addEventListener("mouseleave", () => cursorRing?.classList.remove("hovering"));
  });
});

// ── Init ─────────────────────────────────────────────
runBootSequence();
