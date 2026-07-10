export interface BuffettResult {
  score: number;
  quality: "Excellent" | "Good" | "Average" | "Weak";
}

export default class BuffettQualityEngine {
  static analyze(data: {
    roe: number;
    debtRatio: number;
    profitGrowth: number;
    netMargin: number;
  }): BuffettResult {

    let score = 0;

    if (data.roe >= 20) score += 30;
    else if (data.roe >= 15) score += 20;
    else score += 10;

    if (data.debtRatio <= 0.5) score += 25;
    else if (data.debtRatio <= 1) score += 15;
    else score += 5;

    if (data.profitGrowth >= 15) score += 25;
    else if (data.profitGrowth >= 8) score += 15;
    else score += 5;

    if (data.netMargin >= 20) score += 20;
    else if (data.netMargin >= 10) score += 10;
    else score += 5;

    let quality: BuffettResult["quality"];

    if (score >= 90) {
      quality = "Excellent";
    } else if (score >= 75) {
        
      quality = "Good";
    } else if (score >= 60) {
      quality = "Average";
    } else {
      quality = "Weak";
    }

    return {
      score,
      quality,
    };
  }
}
