# GreenConnect

Community platform for local environmental action. Discover nearby cleanliness drives, recycling initiatives, and plantation campaigns, sort events by distance, and maintain a record of your participation.

[![Live Site](https://img.shields.io/badge/Live_Site-sensei--oh.github.io-01472e)](https://sensei-oh.github.io)

## Overview

GreenConnect centralizes local environmental drives into a single-page web application hosted statically on GitHub Pages. Users can filter events by category, calculate proximity in kilometers using the browser Geolocation API, and track registration and attendance locally via Web Storage. An embedded client-side assistant powered by Fuse.js provides instant fuzzy-search responses across project details, live schedules, and sustainability tips without external APIs or backend dependencies.

**Stack**

| Layer | Technology |
| :--- | :--- |
| Frontend | HTML5, CSS3, Vanilla JavaScript (ES6+) |
| Search & Assistant | Fuse.js (`v7.0.0`) |
| Storage & Location | Web Storage API (`localStorage`), Geolocation API |
| Hosting | GitHub Pages (`sensei-oh.github.io`) |

## Running locally

Prerequisites: Any modern web browser (optional: Node.js for serving over HTTP)

```bash
git clone [https://github.com/Sensei-oh/sensei-oh.github.io.git](https://github.com/Sensei-oh/sensei-oh.github.io.git)
cd sensei-oh.github.io
npx serve .
```

| View / Module | Access | Persistence |
| :--- | :--- | :--- |
| Events Directory | `Events` tab (default view) | In-memory (`EVENTS` array) |
| Participation Record | `My participation` tab | `localStorage` (`gc-reg`) |
| Sustainability Tips | `Tips` tab | In-memory (`TIPS` array) |
| EcoBot Assistant | Bottom-right chat toggle | Stateless client-side search |


## Architecture

```text
Browser
 └── index.html (Static SPA)
      ├── Events & Geolocation ──► Haversine distance sorting
      ├── Participation Ledger ──► localStorage (gc-reg, gc-theme)
      └── EcoBot Assistant ──────► Fuse.js fuzzy index (kb + live EVENTS/TIPS)
```

**Key decisions**

* **Zero-backend static architecture** — Runs entirely in the browser with no server runtime, database provisioning, or API keys required for GitHub Pages deployment.
* **Client-side fuzzy matching** — Fuse.js handles natural-language FAQ queries and dynamically renders live event schedules and tips with zero network latency.
* **Local-first state persistence** — Event registrations, attendance states, and theme preferences persist across sessions via `localStorage` without requiring user accounts.
* **On-device distance calculation** — Uses browser coordinates and the Haversine formula directly in JavaScript rather than calling external mapping APIs.

## Deployment

Hosted directly from the `main` branch via GitHub Pages at `https://sensei-oh.github.io`. Pushing updates to `index.html` automatically publishes the live site with no build step required.

## Project structure

```text
sensei-oh.github.io/
 ├── index.html          Single-page application, styles, EcoBot, and data arrays
 └── README.md           Project documentation
```

## Attribution

Developed by Janit Sarvaiya (Roll No. 35)
