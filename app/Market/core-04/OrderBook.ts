/**
 * Kim Cương OS
 * Market Core-04
 * Order Book Analyzer
 */

export interface OrderBookRecord {
  symbol: string;
  bidVolume: number;
  askVolume: number;
  bidLevels: number;
  askLevels: number;
  spread: number;
  date: Date;
}

export class OrderBook {

  constructor(
    private records: OrderBookRecord[] = []
  ) {}

  add(record: OrderBookRecord): void {
    this.records.push(record);
  }

  getAll(): OrderBookRecord[] {
    return this.records;
  }

  getTotalBidVolume(): number {
    return this.records.reduce(
      (sum, record) => sum + record.bidVolume,
      0
    );
  }

  getTotalAskVolume(): number {
    return this.records.reduce(
      (sum, record) => sum + record.askVolume,
      0
    );
  }

  getAverageSpread(): number {
    if (this.records.length === 0) {
      return 0;
    }

    const total = this.records.reduce(
      (sum, record) => sum + record.spread,
      0
    );

    return total / this.records.length;
  }

  getStrongestDemand(): OrderBookRecord | null {
    if (this.records.length === 0) {
      return null;
    }

    return this.records.reduce((best, current) =>
      current.bidVolume > best.bidVolume
        ? current
        : best
    );
  }

  clear(): void {
    this.records = [];
  }
}
