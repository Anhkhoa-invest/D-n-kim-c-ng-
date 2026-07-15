/**
 * Kim Cuong OS
 * Market Core-05
 * Market Scanner
 */

export interface MarketScannerRecord {
  symbol: string;
  score: number;
  volume: number;
  changePercent: number;
  date: Date;
}

export class MarketScanner {

  constructor(
    private records: MarketScannerRecord[] = []
  ) {}

  add(record: MarketScannerRecord): void {
    this.records.push(record);
  }

  getAll(): MarketScannerRecord[] {
    return this.records;
  }

  getTopScanner(): MarketScannerRecord | null {
    if (this.records.length === 0) {
      return null;
    }

    return this.records.reduce((best, current) =>
      current.score > best.score
        ? current
        : best
    );
  }

  getLatest(): MarketScannerRecord | null {
    return this.records.length > 0
      ? this.records[this.records.length - 1]
      : null;
  }

  clear(): void {
    this.records = [];
  }
}
