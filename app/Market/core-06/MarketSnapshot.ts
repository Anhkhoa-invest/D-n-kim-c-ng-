/**
 * Kim Cuong OS
 * Market Core-06
 * Market Snapshot
 */

export interface MarketSnapshotRecord {
  date: Date;
  vnIndex: number;
  marketScore: number;
  sentiment: "Bullish" | "Neutral" | "Bearish";
}

export class MarketSnapshot {

  constructor(
    private records: MarketSnapshotRecord[] = []
  ) {}

  add(record: MarketSnapshotRecord): void {
    this.records.push(record);
  }

  getAll(): MarketSnapshotRecord[] {
    return this.records;
  }

  getLatest(): MarketSnapshotRecord | null {
    return this.records.length > 0
      ? this.records[this.records.length - 1]
      : null;
  }

  getBestSnapshot(): MarketSnapshotRecord | null {
    if (this.records.length === 0) return null;

    return this.records.reduce((best, current) =>
      current.marketScore > best.marketScore
        ? current
        : best
    );
  }

  clear(): void {
    this.records = [];
  }

}
