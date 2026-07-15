/**
 * Kim Cương OS
 * Market Core-04
 * Foreign Trade Analyzer
 */

export interface ForeignTradeRecord {
  symbol: string;
  buyValue: number;
  sellValue: number;
  netValue: number;
  buyVolume: number;
  sellVolume: number;
  date: Date;
}

export class ForeignTrade {
  constructor(
    private records: ForeignTradeRecord[] = []
  ) {}

  add(record: ForeignTradeRecord): void {
    this.records.push(record);
  }

  getAll(): ForeignTradeRecord[] {
    return this.records;
  }

  getTotalBuyValue(): number {
    return this.records.reduce(
      (sum, record) => sum + record.buyValue,
      0
    );
  }

  getTotalSellValue(): number {
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

  getTopBuy(): ForeignTradeRecord | null {
    if (this.records.length === 0) return null;

    return this.records.reduce((top, current) =>
      current.buyValue > top.buyValue ? current : top
    );
  }

  getTopSell(): ForeignTradeRecord | null {
    if (this.records.length === 0) return null;

    return this.records.reduce((top, current) =>
      current.sellValue > top.sellValue ? current : top
    );
  }

  clear(): void {
    this.records = [];
  }
}
