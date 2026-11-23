# GreenConnect 🌱

**A Digital Platform to Encourage Community Participation in Environmental Activities**

🌐 **Live Site:** [sensei-oh.github.io](https://sensei-oh.github.io)

---

## 📖 Overview

**GreenConnect** bridges the gap between environmental awareness and active community participation. Instead of scattered posters and fragmented social media posts, it provides a single accessible web platform where students and local residents can discover, register for, and track their involvement in local environmental initiatives such as cleanliness drives, recycling programmes, and tree plantation campaigns.

---

## ✨ Key Features

* **Centralized Event Listings:** Browse upcoming local environmental activities with clear details including activity name, date, location, and organiser.
* **Simple Registration:** Streamlined sign-up flow for community drives.
* **Participation Records:** Keeps a record of user involvement across activities (with optional recognition badges/points).
* **Environmental Awareness Tips:** Bite-sized sustainability tips to encourage everyday eco-friendly habits.
* **Client-Side AI/FAQ Assistant:** Built-in floating dark-mode chat widget powered by **Fuse.js** that answers visitor questions instantly in the browser—no backend server or API keys required.

---

## 🤖 Chatbot Architecture (Zero-Backend)

Previously planned with a Vercel serverless API backend, the GreenConnect assistant now runs **100% client-side** so the entire project can be hosted statically on **GitHub Pages**:

* **Engine:** [Fuse.js](https://www.fusejs.io/) lightweight fuzzy-search library loaded via CDN.
* **Zero API Keys & Zero Latency:** All query matching runs locally inside the visitor's browser with no external API calls, rate limits, or hosting costs.
* **Customizable Knowledge Base:** Q&A pairs and keyword tags are stored directly inside the `knowledgeBase` array in `index.html` for easy updates.

---

## 🛠️ Tech Stack

* **Structure:** HTML5
* **Styling:** CSS3 (Custom responsive dark-mode chat UI)
* **Interactivity & Search:** Vanilla JavaScript (ES6+) & Fuse.js
* **Hosting:** GitHub Pages (`sensei-oh.github.io`)
* **Database (Optional):** Firebase

---

## 🚀 Running & Customizing Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Sensei-oh/sensei-oh.github.io.git](https://github.com/Sensei-oh/sensei-oh.github.io.git)
   cd sensei-oh.github.io
