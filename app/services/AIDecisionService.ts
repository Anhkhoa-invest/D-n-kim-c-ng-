export interface AIDecision {
  recommendation: "BUY" | "HOLD" | "SELL";
  confidence: number;
}

export class AIDecisionService {
  static decide(score: number): AIDecision {
    if (score >= 90) {
      return {
        recommendation: "BUY",
        confidence: 95,
      };
    }

    if (score >= 75) {
      return {
        recommendation: "HOLD",
        confidence: 80,
      };
    }

    return {
      recommendation: "SELL",
      confidence: 70,
    };
  }
}

