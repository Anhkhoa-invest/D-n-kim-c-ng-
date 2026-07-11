import PortfolioAIEngine from "./PortfolioAIEngine";

export interface PortfolioReport {
  summary: string;
  score: number;
  risk: number;
  diversification: number;
  dividend: number;
  recommendation: string;
}

export default class PortfolioReportEngine {
  static generate(stocks: any[]): PortfolioReport {
    const result = PortfolioAIEngine.analyze(stocks);

    return {
      summary: `Danh mục gồm ${stocks.length} cổ phiếu.`,
      score: result.totalScore,
      risk: result.risk,
      diversification: result.diversification,
      dividend: result.dividend,
      recommendation: result.recommendation,
    };
  }
}

