import DashboardPortfolioBridge from "./DashboardPortfolioBridge";

export default class DashboardSummaryBridge {
  static analyze(portfolio: any[]) {
    const result = DashboardPortfolioBridge.analyze(portfolio);

    return {
      totalScore: result.score,
      risk: result.risk,
      diversification: result.diversification,
      dividend: result.dividend,
      report: result.report.summary,
    };
  }
}
