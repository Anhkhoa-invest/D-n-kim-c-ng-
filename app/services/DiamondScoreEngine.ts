import FusionConfidenceEngine from "./FusionConfidenceEngine";
import FusionDecisionEngine from "./FusionDecisionEngine";


export interface DiamondScores {
  aiScore: number;
  buffett: number;
  graham: number;
  kelly: number;
  thorp: number;
  quant: number;
  risk: number;
  marginSafety: number;
}
export interface DiamondResult {
    score: number;
    rating: "Diamond" | "Platinum" | "Gold" | "Silver";

    confidence: number;
    recommendation: string;

    aiScore: number;
    buffett: number;
    graham: number;
    kelly: number;
    thorp: number;
    quant: number;
    risk: number;
    marginSafety: number;
}


export default class DiamondScoreEngine {
  static calculate(data: DiamondScores): DiamondResult {
    const score =
      data.aiScore * 0.20 +
      data.buffett * 0.15 +
      data.graham * 0.15 +
      data.kelly * 0.10 +
      data.thorp * 0.10 +
      data.quant * 0.15 +
      data.risk * 0.10 +
      data.marginSafety * 0.05;
const finalScore = Number(score.toFixed(2));
const confidenceResult =
    FusionConfidenceEngine.calculate([
        data.aiScore,
        data.buffett,
        data.graham,
        data.kelly,
        data.thorp,
        data.quant,
        data.risk,
        data.marginSafety
    ]);

    const confidence = confidenceResult.confidence;

const recommendation =
    finalScore >= 90
        ? "STRONG BUY"
        : finalScore >= 80
        ? "BUY"
        : finalScore >= 65
        ? "HOLD"
        : finalScore >= 50
        ? "REDUCE"
        : "SELL";




    let rating: DiamondResult["rating"];

    if (finalScore >= 90) {
      rating = "Diamond";
    } else if (finalScore >= 80) {
      rating = "Platinum";
    } else if (finalScore >= 70) {
      rating = "Gold";
    } else {
      rating = "Silver";
    }

    return {
    score: finalScore,
    rating,

    confidence,
    recommendation,

    aiScore: data.aiScore,

    buffett: data.buffett,
    graham: data.graham,
    kelly: data.kelly,
    thorp: data.thorp,
    quant: data.quant,

    risk: data.risk,
    marginSafety: data.marginSafety
}


  }
}
