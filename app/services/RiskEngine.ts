export interface RiskAnalysis {
  level: "Low" | "Medium" | "High";
  score: number;
}

export default class RiskEngine {
  static analyze(
    debtRatio: number,
    diversification: number
  ): RiskAnalysis {

    let score = 100;

    score -= debtRatio * 0.5;
    score += diversification * 0.3;

    score = Math.max(0, Math.min(100, score));

    let level: RiskAnalysis["level"];

    if (score >= 80) {
      level = "Low";
    } else if (score >= 60) {
      level = "Medium";
    } else {
      level = "High";
    }

    return {
      level,
      score: Number(score.toFixed(2)),
    };
  }
}
