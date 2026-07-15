/**
 * Kim Cuong OS
 * Market Core-06
 * Market Health
 */

export interface MarketHealthRecord {
  date: Date;
  score: number;
  status: "Excellent" | "Good" | "Neutral" | "Weak" | "Critical";
  description: string;
}

export class MarketHealth {

  constructor(
    private records: MarketHealthRecord[] = []
  ) {}

  add(record: MarketHealthRecord): void {
    this.records.push(record);
  }

  getAll(): MarketHealthRecord[] {
    return this.records;
  }

  getLatest(): MarketHealthRecord | null {
    return this.records.length > 0
      ? this.records[this.records.length - 1]
      : null;
  }

  getHealthScore(): number {
    if (this.records.length === 0) return 0;

    return this.records.reduce(
      (sum, record) => sum + record.score,
      0
    ) / this.records.length;
  }

  getBestHealth(): MarketHealthRecord | null {
    if (this.records.length === 0) return null;

    return this.records.reduce((best, current) =>
      current.score > best.score
        ? current
        : best
    );
  }

  clear(): void {
    this.records = [];
  }

}

