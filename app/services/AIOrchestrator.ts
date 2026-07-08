import MarketProvider from "./MarketProvider";
import AIRecommendationService from "./AIRecommendationService";

export default class AIOrchestrator {
  static async analyze(symbol: string) {
    const stock = await MarketProvider.getStock(symbol);

    const recommendation =
    AIRecommendationService.recommend(90);


    return {
      stock,
      recommendation,
    };
  }
}

