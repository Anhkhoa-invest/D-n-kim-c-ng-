/**
 * Kim Cuong OS
 * Market Core-06
 * Market Overview
 */

import { MarketForecast } from "./MarketForecast";
import { MarketHealth } from "./MarketHealth";
import { MarketInsightEngine } from "./MarketInsightEngine";

export class MarketOverview {

  constructor(
    public readonly forecast = new MarketForecast(),
    public readonly health = new MarketHealth(),
    public readonly insight = new MarketInsightEngine()
  ) {}

  getSummary() {
    return {
      healthScore: this.health.getHealthScore(),
      insight: this.insight.getMarketInsight(),
      forecast: this.forecast.getLatest()
    };
  }

}
