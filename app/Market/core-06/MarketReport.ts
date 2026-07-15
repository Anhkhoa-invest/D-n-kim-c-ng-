/**
 * Kim Cuong OS
 * Market Core-06
 * Market Report
 */

export interface MarketReportRecord {
  date: Date;
  title: string;
  summary: string;
  score: number;
}

export class MarketReport {

  constructor(
    private records: MarketReportRecord[] = []
  ) {}

  add(record: MarketReportRecord): void {
    this.records.push(record);
  }

  getAll(): MarketReportRecord[] {
    return this.records;
  }

  getLatest(): MarketReportRecord | null {
    return this.records.length > 0
      ? this.records[this.records.length - 1]
      : null;
  }

  getBestReport(): MarketReportRecord | null {
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
