export interface PortfolioSummary {
  totalScore: number;
  risk: number;
  diversification: number;
  dividend: number;
  recommendation: string;
}

export default class PortfolioAIEngine {
  static analyze(stocks: any[]): PortfolioSummary {
    if (!stocks.length) {
      return {
        totalScore: 0,
        risk: 0,
        diversification: 0,
        dividend: 0,
        recommendation: "NO DATA",
      };
    }

    const totalScore =
      stocks.reduce((sum, stock) => sum + (stock.aiScore || 0), 0) /
      stocks.length;

    return {
      totalScore: Math.round(totalScore),
      risk: 82,
      diversification: 88,
      dividend: 80,
      recommendation:
        totalScore >= 90
          ? "STRONG BUY"
          : totalScore >= 80
          ? "BUY"
          : totalScore >= 70
          ? "HOLD"
          : "REDUCE",
    };
  }
}
