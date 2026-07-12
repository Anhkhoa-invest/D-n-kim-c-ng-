export default class MarketScore {
  public calculate(scores: number[]): number {
    if (scores.length === 0) return 0;

    const total = scores.reduce((a, b) => a + b, 0);

    return Number((total / scores.length).toFixed(2));
  }
}

