/**
 * Kim Cuong OS
 * Market Core-05
 * Market Trend Analyzer
 */

export interface MarketTrendRecord {
  symbol: string;
  trend: "Bullish" | "Bearish" | "Sideway";
  score: number;
  date: Date;
}

export class MarketTrend {

  constructor(
    private records: MarketTrendRecord[] = []
  ) {}

  add(record: MarketTrendRecord): void {
    this.records.push(record);
  }

  getAll(): MarketTrendRecord[] {
    return this.records;
  }

  getBullishCount(): number {
    return this.records.filter(
      record => record.trend === "Bullish"
    ).length;
  }

  getBearishCount(): number {
    return this.records.filter(
      record => record.trend === "Bearish"
    ).length;
  }

  getLatest(): MarketTrendRecord | null {
    return this.records.length > 0
      ? this.records[this.records.length - 1]
      : null;
  }

  clear(): void {
    this.records = [];
  }
}
