// src/senderEmail.js
// Utility to send email using sender.net API

export async function sendContactForm({ naam, email, bericht }) {
  const res = await fetch("/.netlify/functions/sendContact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ naam, email, bericht })
  });
  if (!res.ok) {
    throw new Error("Email sending failed");
  }
  return res.json();
}
