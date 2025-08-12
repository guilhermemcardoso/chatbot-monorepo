import Groq from "groq-sdk";

export async function helloChatbot(message: string) {
  const client = new Groq({
    apiKey: process.env['GROQ_API_KEY'],
  });

  const completion = await client.chat.completions.create({
    messages: [
      { role: "system", content: "Você é um assistente simpático e útil." },
      { role: "user", content: message },
    ],
    model: "llama3-8b-8192",
  });

  return completion.choices[0]?.message?.content || "";
}