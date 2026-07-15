/**
 * Kim Cương OS
 * Market Core-04
 * Market Depth Analyzer
 */

export interface MarketDepthRecord {
  symbol: string;
  totalBidVolume: number;
  totalAskVolume: number;
  bidLevels: number;
  askLevels: number;
  imbalanceRatio: number;
  date: Date;
}

export class MarketDepth {

  constructor(
    private records: MarketDepthRecord[] = []
  ) {}

  add(record: MarketDepthRecord): void {
    this.records.push(record);
  }

  getAll(): MarketDepthRecord[] {
    return this.records;
  }

  getTotalBidVolume(): number {
    return this.records.reduce(
      (sum, record) => sum + record.totalBidVolume,
      0
    );
  }

  getTotalAskVolume(): number {
    return this.records.reduce(
      (sum, record) => sum + record.totalAskVolume,
      0
    );
  }

  getAverageImbalanceRatio(): number {
    if (this.records.length === 0) {
      return 0;
    }

    const total = this.records.reduce(
      (sum, record) => sum + record.imbalanceRatio,
      0
    );

    return total / this.records.length;
  }

  getStrongestBid(): MarketDepthRecord | null {
    if (this.records.length === 0) {
      return null;
    }

    return this.records.reduce((best, current) =>
      current.totalBidVolume > best.totalBidVolume
        ? current
        : best
    );
  }

  clear(): void {
    this.records = [];
  }
}

