/**
 * Kim Cuong OS
 * Market Core-06
 * Market Recommendation
 */

export interface MarketRecommendationRecord {
  date: Date;
  action: "Strong Buy" | "Buy" | "Hold" | "Sell" | "Strong Sell";
  confidence: number;
  reason: string;
}

export class MarketRecommendation {

  constructor(
    private records: MarketRecommendationRecord[] = []
  ) {}

  add(record: MarketRecommendationRecord): void {
    this.records.push(record);
  }

  getAll(): MarketRecommendationRecord[] {
    return this.records;
  }

  getLatest(): MarketRecommendationRecord | null {
    return this.records.length > 0
      ? this.records[this.records.length - 1]
      : null;
  }

  getBestRecommendation(): MarketRecommendationRecord | null {
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
