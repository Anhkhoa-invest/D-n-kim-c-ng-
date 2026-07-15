/**
 * Kim Cương OS
 * Market Core-05
 * Market Breadth Analyzer
 */

export interface MarketBreadthRecord {
  advancing: number;
  declining: number;
  unchanged: number;
  breadthRatio: number;
  date: Date;
}

export class MarketBreadth {

  constructor(
    private records: MarketBreadthRecord[] = []
  ) {}

  add(record: MarketBreadthRecord): void {
    this.records.push(record);
  }

  getAll(): MarketBreadthRecord[] {
    return this.records;
  }

  getAverageBreadthRatio(): number {
    if (this.records.length === 0) {
      return 0;
    }

    const total = this.records.reduce(
      (sum, record) => sum + record.breadthRatio,
      0
    );

    return total / this.records.length;
  }

  getLatest(): MarketBreadthRecord | null {
    return this.records.length > 0
      ? this.records[this.records.length - 1]
      : null;
  }

  clear(): void {
    this.records = [];
  }
}

