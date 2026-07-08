export interface ScoreResult {
  total: number;
  grade: "A" | "B" | "C";
}

class ScoreEngine {

  calculate(
    trendScore: number,
    growthScore: number,
    riskScore: number
  ): ScoreResult {

    const total = Math.round(
      (trendScore + growthScore + riskScore) / 3
    );

    if (total >= 85) {
      return {
        total,
        grade: "A",
      };
    }

    if (total >= 70) {
      return {
        total,
        grade: "B",
      };
    }

    return {
      total,
      grade: "C",
    };

  }

}

export default new ScoreEngine();
