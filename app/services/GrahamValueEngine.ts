export interface GrahamResult {
  score: number;
  rating: "Excellent" | "Good" | "Average" | "Weak";
}

export interface GrahamData {
  pe: number;
  pb: number;
  debtRatio: number;
  currentRatio: number;
}

export default class GrahamValueEngine {
  static analyze(data: GrahamData): GrahamResult {
    let score = 0;

    // P/E
    if (data.pe <= 10) score += 30;
    else if (data.pe <= 15) score += 20;
    else score += 10;

    // P/B
    if (data.pb <= 1.5) score += 25;
    else if (data.pb <= 2.5) score += 15;
    else score += 5;

    // Debt
    if (data.debtRatio <= 0.5) score += 25;
    else if (data.debtRatio <= 1) score += 15;
    else score += 5;

    // Current Ratio
    if (data.currentRatio >= 2) score += 20;
    else if (data.currentRatio >= 1.5) score += 10;
    else score += 5;

    let rating: GrahamResult["rating"];

    if (score >= 90) rating = "Excellent";
    else if (score >= 75) rating = "Good";
    else if (score >= 60) rating = "Average";
    else rating = "Weak";

    return {
      score,
      rating,
    };
  }
}

