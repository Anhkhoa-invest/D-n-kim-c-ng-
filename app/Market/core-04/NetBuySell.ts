/**
 * Kim Cương OS
 * Market Core-04
 * Net Buy/Sell Analyzer
 */

export interface NetBuySellRecord {
  symbol: string;
  buyValue: number;
  sellValue: number;
  netValue: number;
  date: Date;
}

export class NetBuySell {

  constructor(
    private records: NetBuySellRecord[] = []
  ) {}

  add(record: NetBuySellRecord): void {
    this.records.push(record);
  }

  getAll(): NetBuySellRecord[] {
    return this.records;
  }

  getTotalBuy(): number {
    return this.records.reduce(
      (sum, record) => sum + record.buyValue,
      0
    );
  }

  getTotalSell(): number {
    return this.records.reduce(
      (sum, record) => sum + record.sellValue,
      0
    );
  }

  getNetValue(): number {
    return this.records.reduce(
      (sum, record) => sum + record.netValue,
      0
    );
  }

  getTopNetBuy(): NetBuySellRecord | null {
    if (this.records.length === 0) return null;

    return this.records.reduce((best, current) =>
      current.netValue > best.netValue ? current : best
    );
  }

  getTopNetSell(): NetBuySellRecord | null {
    if (this.records.length === 0) return null;

    return this.records.reduce((worst, current) =>
      current.netValue < worst.netValue ? current : worst
    );
  }

  clear(): void {
    this.records = [];
  }
}
