# sensei-oh.github.io
# GreenConnect

A website that helps people find and join local environmental activities such as cleanliness drives, recycling programmes and tree plantation campaigns.

**Live site:** (https://sensei-oh.github.io/)

Project for IDEA LAB-I, First Year, Computer Science & Engineering (AI&DS)
Student: Janit Sarvaiya

## Problem statement

Low community participation in environmental activities. People often lack awareness, motivation and information about nearby environmental events, and have no single place to find and join them.

## Features

- **Events:** a list of environmental events with date, place and description, filtered by category (Cleanliness, Recycling, Plantation).
- **Nearby sorting:** uses the browser's location to show the nearest events first. If location is denied, events stay in date order.
- **Registration:** register for an event or cancel.
- **My participation:** shows registered and attended counts, and lets the user mark an event as attended.
- **Awareness tips:** short everyday tips for living sustainably.
- **EcoBot:** an AI chatbot that answers questions about the events and gives eco tips.

The events in the project are sample data for demonstration.

## Technologies used

- HTML, CSS and JavaScript (single page, no framework)
- Browser `localStorage` for saving registrations on the user's device
- Browser Geolocation API for nearby sorting
- Gemini API through a small serverless function for the chatbot
- GitHub Pages for the website and Vercel for the chatbot function

## Project structure

```
greenconnect/
  index.html      the website (frontend)
  README.md       this file

  api/
    chat.js       chatbot backend (deployed on Vercel)
```

## How to run it

**Website only:** download `index.html` and open it in a browser. Everything works except the chatbot.

**With the chatbot:**
1. Create an API key at aistudio.google.com and set a spending limit.
2. Deploy the `greenconnect-api` repository on Vercel.
3. In Vercel, add an environment variable named `GEMINI_API_KEY` with your key, then redeploy.
4. In `index.html`, set the chat request URL to your Vercel link followed by `/api/chat`.
5. In `api/chat.js`, set the allowed origin to your GitHub Pages address.

The API key is stored only in Vercel's environment variables. Never put it in `index.html` or commit it to GitHub.

## How to change the events

Open `index.html` and edit the `EVENTS` list near the top of the script. Each event has a title, category, place, latitude, longitude, number of days from today, and description.

## Limitations

- Registrations are saved only in the visitor's own browser and are not shared between users.
- Events are sample data and are not managed through an admin page.
- The chatbot uses the API owner's credit, so it should be limited for public use.

## Future scope

- User login and shared registration records using a database such as Firebase
- An organiser page for adding events
- Reward points, badges or certificates for volunteers
- Event check-in using QR codes
- Support for multiple languages

## UNSDG alignment

SDG 4 (Quality Education), SDG 8 (Decent Work and Economic Growth) and SDG 10 (Reduced Inequalities).
