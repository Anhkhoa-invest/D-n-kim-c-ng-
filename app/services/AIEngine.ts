import type { AIContext } from "./AIContext";
import AIScoringService from "./AIScoringService";
import AIExplainService from "./AIExplainService";
import AIRecommendationService from "./AIRecommendationService";

export class AIEngine {
  static analyze(context: AIContext) {

    const score = AIScoringService.score({
      financial: context.roe ?? 70,
      growth: context.growth ?? 70,
      valuation: context.pe ? Math.max(100 - context.pe, 0) : 70,
      risk: context.debt ? Math.max(100 - context.debt, 0) : 70,
    });

    return {
      score,
      explanation: AIExplainService.explain(score),
      recommendation: AIRecommendationService.recommend(score),
    };
  }
}

export default AIEngine;
