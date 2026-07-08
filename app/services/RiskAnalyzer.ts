export interface RiskResult {
  score: number;
  level: "LOW" | "MEDIUM" | "HIGH";
}

class RiskAnalyzer {

  analyze(debtRatio: number): RiskResult {

    if (debtRatio <= 30) {
      return {
        score: 90,
        level: "LOW",
      };
    }

    if (debtRatio <= 60) {
      return {
        score: 70,
        level: "MEDIUM",
      };
    }

    return {
      score: 40,
      level: "HIGH",
    };

  }

}

export default new RiskAnalyzer();