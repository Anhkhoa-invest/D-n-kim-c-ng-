import { BaseAgent } from "./BaseAgent";

export class NewsAgent extends BaseAgent {
  constructor() {
    super("NewsAgent");
  }

  async execute(input: unknown): Promise<unknown> {
    console.log("📰 News analysis...", input);

    return {
      success: true,
      news: input,
    };
  }
}
