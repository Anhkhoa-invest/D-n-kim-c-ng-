export interface ThorpResult {
  expectedValue: number;
  recommendation: "Positive" | "Neutral" | "Negative";
}

export interface ThorpData {
  winProbability: number;
  rewardRisk: number;
}

export default class ThorpEngine {
  static analyze(data: ThorpData): ThorpResult {
    const p = data.winProbability;
    const q = 1 - p;

    // Expected Value
    const expectedValue = p * data.rewardRisk - q;

    let recommendation: ThorpResult["recommendation"];

    if (expectedValue > 0.30) {
      recommendation = "Positive";
    } else if (expectedValue > 0) {
      recommendation = "Neutral";
    } else {
      recommendation = "Negative";
    }

    return {
      expectedValue: Number(expectedValue.toFixed(4)),
      recommendation,
    };
  }
}
