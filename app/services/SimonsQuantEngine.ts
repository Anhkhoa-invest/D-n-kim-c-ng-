export interface SimonsQuantData {
  momentum: number;
  trend: number;
  volumeScore: number;
  volatility: number;
}

export interface SimonsQuantResult {
  score: number;
  signal: "Strong Buy" | "Buy" | "Hold" | "Sell";
}

export default class SimonsQuantEngine {
  static analyze(data: SimonsQuantData): SimonsQuantResult {
    let score = 0;

    // Momentum
    score += data.momentum * 0.30;

    // Trend
    score += data.trend * 0.30;

    // Volume
    score += data.volumeScore * 0.20;

    // Volatility (càng thấp càng tốt)
    score += (100 - data.volatility) * 0.20;

    score = Math.max(0, Math.min(100, score));

    let signal: SimonsQuantResult["signal"];

    if (score >= 85) {
      signal = "Strong Buy";
    } else if (score >= 70) {
      signal = "Buy";
    } else if (score >= 50) {
      signal = "Hold";
    } else {
      signal = "Sell";
    }

    return {
      score: Number(score.toFixed(2)),
      signal,
    };
  }
}
