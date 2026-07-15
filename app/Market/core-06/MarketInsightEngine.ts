/**
 * Kim Cuong OS
 * Market Core-06
 * Market Insight Engine
 */

import { MarketForecast } from "./MarketForecast";
import { MarketHealth } from "./MarketHealth";

export class MarketInsightEngine {

  constructor(
    public readonly forecast = new MarketForecast(),
    public readonly health = new MarketHealth()
  ) {}


  getOverallScore(): number {
    const confidence =
      this.forecast.getHighestConfidence()?.confidence ?? 0;

    return (
      this.health.getHealthScore() + confidence
    ) / 2;
  }

  getMarketInsight(): string {
    const score = this.getOverallScore();

    if (score >= 80) return "Strong Bullish";
    if (score >= 60) return "Bullish";
    if (score >= 40) return "Neutral";
    if (score >= 20) return "Bearish";

    return "Strong Bearish";
  }

}


 

 