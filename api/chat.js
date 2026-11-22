export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const messages = (req.body?.messages || []).slice(-10);
  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({ model: "claude-sonnet-5-5", max_tokens: 300, messages }),
  });
  const d = await r.json();
  if (!r.ok) return res.status(500).json({ error: "Chat failed" });
  res.json({ reply: d.content[0].text });
}
