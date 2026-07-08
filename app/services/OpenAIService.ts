export class OpenAIService {
  static async ask(prompt: string) {
    const res = await fetch("/api/market/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    return await res.json();
  }
}
