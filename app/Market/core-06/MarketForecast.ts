/**
 * Kim Cuong OS
 * Market Core-06
 * Market Forecast
 */

export interface MarketForecastRecord {
  date: Date;
  trend: "Bullish" | "Bearish" | "Sideway";
  confidence: number;
  targetIndex: number;
  probability: number;
}

export class MarketForecast {

  constructor(
    private records: MarketForecastRecord[] = []
  ) {}

  add(record: MarketForecastRecord): void {
    this.records.push(record);
  }

  getAll(): MarketForecastRecord[] {
    return this.records;
  }

  getLatest(): MarketForecastRecord | null {
    return this.records.length > 0
      ? this.records[this.records.length - 1]
      : null;
  }

  getHighestConfidence(): MarketForecastRecord | null {
    if (this.records.length === 0) return null;

    return this.records.reduce((best, current) =>
      current.confidence > best.confidence
        ? current
        : best
    );
  }

  clear(): void {
    this.records = [];
  }

}
