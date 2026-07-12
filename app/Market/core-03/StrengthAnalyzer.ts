export default class StrengthAnalyzer {
  public analyze(buy: number, sell: number) {
    const total = buy + sell;

    return {
      buy,
      sell,
      strength: total === 0 ? 0 : buy / total,
      bullish: buy > sell,
    };
  }
}

