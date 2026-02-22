# SAIGOVARDHAN_OS v2.0 — Developer Portfolio

> A Cyberpunk Terminal OS-themed developer portfolio for Saigovardhan R. Sasanapuri

---

## ⚡ Quick Start (Static — No Backend)

Just open `index.html` in your browser. The chatbot runs locally using the built-in knowledge base — no server needed!

---

## 🚀 Full Setup (With AI Chatbot via OpenAI)

### Prerequisites
- Node.js v18+ ([download](https://nodejs.org))
- npm
- OpenAI API Key ([get one](https://platform.openai.com/api-keys))

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env
# Edit .env and add your OPENAI_API_KEY

# 3. Move frontend files to public/ folder
mkdir public
cp index.html style.css script.js public/

# 4. Start the server
npm start
# Dev mode (auto-reload):
npm run dev

# 5. Open browser
# http://localhost:3000
```

---

## 📁 Folder Structure

```
portfolio/
├── public/              ← Frontend files (served by Express)
│   ├── index.html
│   ├── style.css
│   └── script.js
├── server.js            ← Node.js + Express backend
├── package.json
├── .env                 ← Your secrets (gitignored)
├── .env.example         ← Template
└── README.md
```

---

## 🌐 Deployment

### Option A: Vercel (Frontend only — static)
1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Set **Framework Preset** to "Other"
4. Set **Output Directory** to `public` (or root if no backend)
5. Deploy!

### Option B: Render (Full-stack with backend)
1. Push to GitHub
2. Create new **Web Service** on [render.com](https://render.com)
3. Set **Build Command**: `npm install`
4. Set **Start Command**: `node server.js`
5. Add environment variable: `OPENAI_API_KEY=sk-...`
6. Deploy!

### Option C: Railway
1. Connect GitHub repo on [railway.app](https://railway.app)
2. Add `OPENAI_API_KEY` in environment variables
3. Deploy!

---

## 🤖 Chatbot Features

The JARVIS AI chatbot works in **two modes**:

1. **Local Mode** (no API key): Uses built-in keyword matching against resume data. Works offline. Covers: skills, experience, projects, education, certifications, contact.

2. **OpenAI Mode** (with API key): Full GPT-3.5-turbo responses, with the resume injected as system context. More natural, conversational answers.

---

## ⌨️ Terminal Commands

Open the terminal (bottom-left button) and type:
- `help` — show all commands
- `show skills` — list all skills
- `open projects` — navigate to projects
- `about` — about Saigovardhan
- `whoami` — system identity
- `contact` — contact info
- `experience` — work history
- `certifications` — list certifications
- `hack` — 🔓 easter egg
- `clear` — clear terminal

---

## 🎨 Theme

**Cyberpunk OS + Hacker Terminal + AI Control System**

- Colors: Electric Blue (`#00f0ff`) + Violet Neon (`#b400ff`) + Black void
- Fonts: Orbitron (display) + Share Tech Mono (terminal)
- Effects: Matrix code rain, custom cursor, scanlines, glassmorphism, neon glows

---

*Built with ❤️ by Saigovardhan R. Sasanapuri*
