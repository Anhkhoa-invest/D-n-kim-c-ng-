
export default class VolatilityAnalyzer {
  public analyze(high: number, low: number) {
    const volatility = high - low;

    return {
      high,
      low,
      volatility,
      stable: volatility < 1,
    };
  }
}
