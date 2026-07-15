/**
 * Kim Cuong OS
 * Market Core-05
 * Market Sentiment Analyzer
 */

export interface MarketSentimentRecord {
  sentiment: "Positive" | "Neutral" | "Negative";
  score: number;
  confidence: number;
  date: Date;
}

export class MarketSentiment {

  constructor(
    private records: MarketSentimentRecord[] = []
  ) {}

  add(record: MarketSentimentRecord): void {
    this.records.push(record);
  }

  getAll(): MarketSentimentRecord[] {
    return this.records;
  }

  getAverageScore(): number {
    if (this.records.length === 0) {
      return 0;
    }

    const total = this.records.reduce(
      (sum, record) => sum + record.score,
      0
    );

    return total / this.records.length;
  }

  getLatest(): MarketSentimentRecord | null {
    return this.records.length > 0
      ? this.records[this.records.length - 1]
      : null;
  }

  clear(): void {
    this.records = [];
  }
}
