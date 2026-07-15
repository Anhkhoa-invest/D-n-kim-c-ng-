/**
 * Kim Cuong OS
 * Market Core-06
 * Market Summary
 */

export interface MarketSummaryRecord {
  date: Date;
  overallScore: number;
  trend: "Bullish" | "Neutral" | "Bearish";
  recommendation: string;
}

export class MarketSummary {

  constructor(
    private records: MarketSummaryRecord[] = []
  ) {}

  add(record: MarketSummaryRecord): void {
    this.records.push(record);
  }

  getAll(): MarketSummaryRecord[] {
    return this.records;
  }

  getLatest(): MarketSummaryRecord | null {
    return this.records.length > 0
      ? this.records[this.records.length - 1]
      : null;
  }

  getAverageScore(): number {
    if (this.records.length === 0) {
      return 0;
    }

    return this.records.reduce(
      (sum, record) => sum + record.overallScore,
      0
    ) / this.records.length;
  }

  clear(): void {
    this.records = [];
  }

}

