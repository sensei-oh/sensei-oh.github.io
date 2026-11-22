export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "https://sensei-oh.github.io");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).end();

  const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";
  const messages = (req.body?.messages || []).slice(-10);

  // Gemini uses "model" instead of "assistant"
  const contents = messages.map(m => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  try {
    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY,
        },
        body: JSON.stringify({ contents }),
      }
    );
    const d = await r.json();
    if (!r.ok) return res.status(500).json({ error: d.error?.message || "Chat failed" });
    const reply = d.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't answer that.";
    res.json({ reply });
  } catch (e) {
    res.status(500).json({ error: "Chat failed" });
  }
}
