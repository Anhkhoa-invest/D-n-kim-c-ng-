export class AIRecommendationService {
  static recommend(score: number) {
    if (score >= 90) {
      return {
        action: "MUA",
        color: "green",
        confidence: 95,
      };
    }

    if (score >= 75) {
      return {
        action: "THEO DÕI",
        color: "orange",
        confidence: 75,
      };
    }

    return {
      action: "KHÔNG MUA",
      color: "red",
      confidence: 60,
    };
  }
}

export default AIRecommendationService;

