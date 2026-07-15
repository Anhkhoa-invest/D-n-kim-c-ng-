/**
 * Kim Cương OS
 * Market Core-05
 * Market Momentum Analyzer
 */

export interface MarketMomentumRecord {
  symbol: string;
  momentum: number;
  changePercent: number;
  volumeRatio: number;
  date: Date;
}

export class MarketMomentum {

  constructor(
    private records: MarketMomentumRecord[] = []
  ) {}

  add(record: MarketMomentumRecord): void {
    this.records.push(record);
  }

  getAll(): MarketMomentumRecord[] {
    return this.records;
  }

  getAverageMomentum(): number {
    if (this.records.length === 0) {
      return 0;
    }

    const total = this.records.reduce(
      (sum, record) => sum + record.momentum,
      0
    );

    return total / this.records.length;
  }

  getStrongestMomentum(): MarketMomentumRecord | null {
    if (this.records.length === 0) {
      return null;
    }

    return this.records.reduce((best, current) =>
      current.momentum > best.momentum
        ? current
        : best
    );
  }

  getLatest(): MarketMomentumRecord | null {
    return this.records.length > 0
      ? this.records[this.records.length - 1]
      : null;
  }

  clear(): void {
    this.records = [];
  }
}
