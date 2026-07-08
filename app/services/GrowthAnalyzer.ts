export interface GrowthResult {
  score: number;
  level: "LOW" | "MEDIUM" | "HIGH";
}

class GrowthAnalyzer {

  analyze(revenueGrowth: number): GrowthResult {

    if (revenueGrowth >= 20) {
      return {
        score: 90,
        level: "HIGH",
      };
    }

    if (revenueGrowth >= 10) {
      return {
        score: 70,
        level: "MEDIUM",
      };
    }

    return {
      score: 40,
      level: "LOW",
    };
  }

}

export default new GrowthAnalyzer();

