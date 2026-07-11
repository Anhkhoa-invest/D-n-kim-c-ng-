import PortfolioFacade from "./PortfolioFacade";

export default class DashboardPortfolioBridge {
  static analyze(portfolio: any[]) {
    const result = PortfolioFacade.analyze(portfolio);

    return {
      score: result.summary.totalScore,
      risk: result.summary.risk,
      diversification: result.summary.diversification,
      dividend: result.summary.dividend,

      recommendation: result.report.recommendation,

      decision: result.decision.action,
      confidence: result.decision.confidence,

      explanation: result.explain,

      report: result.report,
    };
  }
}
