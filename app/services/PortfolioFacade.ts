import PortfolioAIEngine from "./PortfolioAIEngine";
import PortfolioReportEngine from "./PortfolioReportEngine";
import PortfolioDecisionEngine from "./PortfolioDecisionEngine";
import PortfolioExplainEngine from "./PortfolioExplainEngine";

export default class PortfolioFacade {
  static analyze(stocks: any[]) {
    const summary = PortfolioAIEngine.analyze(stocks);
    const report = PortfolioReportEngine.generate(stocks);
    const decision = PortfolioDecisionEngine.decide(stocks);
    const explain = PortfolioExplainEngine.explain(stocks);

    return {
      summary,
      report,
      decision,
      explain,
    };
  }
}

