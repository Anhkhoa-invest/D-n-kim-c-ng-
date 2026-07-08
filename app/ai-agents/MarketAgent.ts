import { BaseAgent } from "./BaseAgent";

export class MarketAgent extends BaseAgent {
  constructor() {
    super("MarketAgent");
  }

  async execute(input: unknown): Promise<unknown> {
    console.log("📈 Analyzing market...", input);

    return {
      success: true,
      timestamp: new Date(),
      data: input,
    };
  }
}
