import { BaseAgent } from "./BaseAgent";

export class PortfolioAgent extends BaseAgent {
  constructor() {
    super("PortfolioAgent");
  }

  async execute(input: unknown): Promise<unknown> {
    console.log("💼 Portfolio analysis...", input);

    return {
      success: true,
      portfolio: input,
    };
  }
}


