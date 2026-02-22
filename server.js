/**
 * SAIGOVARDHAN_OS — server.js
 * Node.js + Express backend with OpenAI chatbot integration
 * 
 * Usage:
 *   1. npm install
 *   2. Create .env file with OPENAI_API_KEY=sk-...
 *   3. node server.js
 *   4. Visit http://localhost:3000
 */

const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ── Resume Knowledge Base (for AI context) ────────────
const RESUME_CONTEXT = `
You are SAI-BOT, the AI assistant for Saigovardhan R. Sasanapuri's developer portfolio.
You are trained exclusively on Saigovardhan's resume data below.
Respond in a technical, futuristic, but friendly tone. Stay in character as SAI-BOT.
Only answer questions about Saigovardhan.

=== RESUME DATA ===

NAME: Saigovardhan R. Sasanapuri
EMAIL: saigovardhan1304@gmail.com
PHONE: +91 9689820429
SOCIAL LINKS: LinkedIn (https://linkedin.com/in/saigovardhan-sasanapuri-8ab02b256/), GitHub (https://github.com/saigovardhan1304)

EDUCATION:
- Vellore Institute of Technology (Chennai)
- BTech in Computer Science Core
- CGPA: 8.98/10
- Duration: September 2022 – July 2026

EXPERIENCE:
1. Frontend Developer & UX Designer Intern @ Connex AI (USA, Remote)
   Period: September 2025 – Present
   Details: Building AI-driven healthcare applications. UI/UX design via Figma, frontend development.

2. Software Developer Intern @ ThinkSmart Systems Pvt. Ltd. (Pune, Onsite)
   Period: May 2025 – June 2025
   Details: Developed RESTful APIs using ASP.NET Core. Integrated frontend with backend using C#, HTML/CSS, Oracle SQL Server, MVC architecture.

PROJECTS:
1. TEA Encryption Project: Modified TEA (Tiny Encryption Algorithm) for enhanced security data protection. (Repo: https://github.com/saigovardhan1304/MPMC-Modified-TEA-Encryption-Algorithm-Project)
2. Lung Cancer Research: Advanced 3D CT image segmentation and deep learning using TensorFlow. (Link: https://drive.google.com/file/d/1rxuyzKkq8X4A0_2WbYISYUTTbn2fg1vT/view)
3. Saigovardhan's Tuition Classes: Full-stack educational platform (.NET, ASP.NET Core, C#, SQL Server). (Repo: https://github.com/saigovardhan1304/Tuition-Classes)
4. AI Speech Analyzer: AI-powered speech analysis app. (Repo: https://github.com/saigovardhan1304/Clarity-Coach/tree/main)
5. WhatsApp Convo Analyser: Chat analytics platform (Python, Streamlit, NLP). (Live: https://whatsappconvoanalyser.streamlit.app/)
6. Medi-Thon Hospital File Transfer System: Secure file transfer (Hackathon). (Repo: https://github.com/saigovardhan1304/Medithon_Medicos/tree/copy)

SKILLS:
Languages: C++, Java, Python, SQL, C#
Technologies: Azure AI, .NET, ASP.NET Core, Frontend Development, MongoDB, Machine Learning, Power BI, Figma
Tools: Oracle SQL Server, Flask, Streamlit, Git/GitHub

CERTIFICATIONS:
1. Microsoft Certified: Azure AI Engineer Associate (AI-102)
2. Full-Stack Web Development - Udemy
3. JP Morgan Chase Software Engineering Job Simulation - Forage
4. Cyber Security Threat Landscape - LinkedIn

STATUS: Open to new opportunities
`;

// ── OpenAI Chat Endpoint ──────────────────────────────
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Invalid message" });
  }

  // Check for API key
  if (!process.env.GEMINI_API_KEY) {
    // Fallback to local knowledge base if no API key
    return res.json({ reply: getFallbackResponse(message) });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const geminiUrl =
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(geminiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: RESUME_CONTEXT + "\n\nUser question: " + message }
            ]
          }
        ],
        generationConfig: {
          maxOutputTokens: 300,
          temperature: 0.7
        }
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Gemini error:", err);
      return res.json({ reply: getFallbackResponse(message) });
    }

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Query could not be processed.";
    res.json({ reply });

  } catch (error) {
    console.error("Server error:", error);
    // Graceful fallback
    res.json({ reply: getFallbackResponse(message) });
  }
});

// ── Fallback (no API key needed) ─────────────────────
function getFallbackResponse(query) {
  const q = query.toLowerCase();
  if (q.includes("skill") || q.includes("technolog") || q.includes("language"))
    return "Skills: C++, Java, Python, SQL, C#, Azure AI, .NET, Frontend Dev, ML, Figma. Azure AI-102 certified.";
  if (q.includes("experience") || q.includes("work") || q.includes("intern"))
    return "Currently: Frontend Dev & UX at Connex AI (USA, Remote). Previous: Software Dev Intern at ThinkSmart Systems (Pune).";
  if (q.includes("project"))
    return "Projects: Tuition Platform (.NET), AI Speech Analyzer (Whisper/spaCy), WhatsApp Analyser (Streamlit), Hospital File System (Hackathon).";
  if (q.includes("contact") || q.includes("email"))
    return "Email: saigovardhan1304@gmail.com | Phone: +91 9689820429 | Pune, India";
  if (q.includes("educat") || q.includes("vit") || q.includes("cgpa"))
    return "VIT Vellore — BTech CSE, CGPA: 8.95, graduating 2026.";
  return "I am JARVIS, Saigovardhan's portfolio AI. Ask about his skills, projects, experience, or certifications.";
}

// ── Serve frontend ────────────────────────────────────
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ── Start server ──────────────────────────────────────
app.listen(PORT, () => {
  console.log(`
  ╔══════════════════════════════════════╗
  ║   SAIGOVARDHAN_OS Server — ONLINE   ║
  ║   http://localhost:${PORT}              ║
  ╚══════════════════════════════════════╝
  `);
});

module.exports = app;