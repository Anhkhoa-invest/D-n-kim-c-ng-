export interface TrendResult {
  direction: "UP" | "DOWN" | "SIDEWAY";
  confidence: number;
}

class TrendAnalyzer {

  analyze(prices: number[]): TrendResult {

    if (prices.length < 2) {
      return {
        direction: "SIDEWAY",
        confidence: 0,
      };
    }

    const first = prices[0];
    const last = prices[prices.length - 1];

    if (last > first) {
      return {
        direction: "UP",
        confidence: 80,
      };
    }

    if (last < first) {
      return {
        direction: "DOWN",
        confidence: 80,
      };
    }

    return {
      direction: "SIDEWAY",
      confidence: 50,
    };
  }

}

export default new TrendAnalyzer();
