import { AgentBus } from "./AgentBus";
import { DecisionEngine } from "./DecisionEngine";
import { AgentManager } from "./AgentManager";

export class Orchestrator {
    private readonly bus = new AgentBus();
private readonly decision = new DecisionEngine();
  constructor(
    private readonly manager: AgentManager
  ) {}

  async analyze(input: unknown) {
    const market = await this.manager.run("MarketAgent", input);
    this.bus.send({
    from: "MarketAgent",
    to: "DecisionEngine",
    type: "MARKET_RESULT",
    payload: market,
    timestamp: new Date()
});

    const news = await this.manager.run("NewsAgent", input);
    this.bus.send({
    from: "NewsAgent",
    to: "DecisionEngine",
    type: "NEWS_RESULT",
    payload: news,
    timestamp: new Date()
});


    const portfolio = await this.manager.run("PortfolioAgent", input);
this.bus.send({
    from: "PortfolioAgent",
    to: "DecisionEngine",
    type: "PORTFOLIO_RESULT",
    payload: portfolio,
    timestamp: new Date()
});
const financial = await this.manager.run("FinancialAgent", input);
this.bus.send({
    from: "FinancialAgent",
    to: "DecisionEngine",
    type: "FINANCIAL_RESULT",
    payload: financial,
    timestamp: new Date()
});
const memory = await this.manager.run("MemoryAgent", {
    market,
    news,
    portfolio,
    financial,
    
});

const decision = this.decision.evaluate({
    market,
    news,
    portfolio,
    financial,
    memory,

});


return {
    market,
    news,
    portfolio,
    decision,
    financial,
    memory,
    createdAt: new Date(),
};
  }
}

