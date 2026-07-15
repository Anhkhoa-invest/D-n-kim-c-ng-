import BuffettQualityEngine from "./BuffettQualityEngine";
import GrahamValueEngine from "./GrahamValueEngine";
import KellyEngine from "./KellyEngine";
import MarginOfSafetyEngine from "./MarginOfSafetyEngine";
import GrowthAnalyzer from "./GrowthAnalyzer";
import FusionScoreEngine from "./FusionScoreEngine";

export default class AIFusionEngine {
  static calculate(data: {
    aiScore: number;

    buffett: number;
    graham: number;
    growth: number;
    risk: number;
    marginSafety: number;

    winRate: number;
    rewardRisk: number;
  }) {

    const buffett = data.buffett;

    const graham = data.graham;

    const growth = data.growth;

    const margin = data.marginSafety;

    const kelly =
      KellyEngine.calculate(
        data.winRate,
        data.rewardRisk
      ).percent;

    const finalScore =
      FusionScoreEngine.calculate([
        data.aiScore,
        buffett,
        graham,
        growth,
        margin,
        kelly
      ]);

    return {

      score: finalScore,

      buffett,

      graham,

      growth,

      margin,

      kelly,

      recommendation:
        finalScore >= 90
          ? "STRONG BUY"
          : finalScore >= 80
          ? "BUY"
          : finalScore >= 65
          ? "HOLD"
          : finalScore >= 50
          ? "REDUCE"
          : "SELL",

      version: "15.0"
    };
  }
}
