import DashboardPortfolioBridge from "./DashboardPortfolioBridge";

export default class DashboardDecisionBridge {
  static analyze(portfolio: any[]) {
    const result = DashboardPortfolioBridge.analyze(portfolio);

    return {
      action: result.decision,
      confidence: result.confidence,
      recommendation: result.recommendation,
    };
  }
}

