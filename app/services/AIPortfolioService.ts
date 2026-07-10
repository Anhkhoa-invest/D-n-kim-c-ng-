import AIOrchestrator from "./AIOrchestrator";
import DiversificationService from "./DiversificationService";
import PortfolioScoreService from "./PortfolioScoreService";

export interface PortfolioItem {
  symbol: string;
  weight: number;
}

export default class AIPortfolioService {
  static async analyze(items: PortfolioItem[]) {
    const reports = [];
    for (const item of items) {

      const result = await AIOrchestrator.analyze(item.symbol);

      reports.push({
        ...result,
        weight: item.weight,
      });
    }
const portfolioScore =
    PortfolioScoreService.calculate(reports);

const diversification =
    DiversificationService.calculate(
        reports.map(r => r.weight)
    );

  return {
    portfolioScore,
    diversification,
    reports
};

  }
}

