export default class MarketSentiment {
  public analyze(score: number): string {
    if (score >= 80) return "Very Bullish";
    if (score >= 60) return "Bullish";
    if (score >= 40) return "Neutral";
    if (score >= 20) return "Bearish";
    return "Very Bearish";
  }
}
