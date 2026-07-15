/**
 * Kim Cương OS
 * Market Core-04
 * Block Trade Analyzer
 */

export interface BlockTradeRecord {
  symbol: string;
  price: number;
  volume: number;
  value: number;
  buyer?: string;
  seller?: string;
  time: Date;
}

export class BlockTrade {

  constructor(
    private trades: BlockTradeRecord[] = []
  ) {}

  add(record: BlockTradeRecord): void {
    this.trades.push(record);
  }

  getAll(): BlockTradeRecord[] {
    return this.trades;
  }

  getTotalVolume(): number {
    return this.trades.reduce(
      (sum, trade) => sum + trade.volume,
      0
    );
  }

  getTotalValue(): number {
    return this.trades.reduce(
      (sum, trade) => sum + trade.value,
      0
    );
  }

  getLargestTrade(): BlockTradeRecord | null {
    if (this.trades.length === 0) return null;

    return this.trades.reduce((largest, current) =>
      current.value > largest.value ? current : largest
    );
  }

  clear(): void {
    this.trades = [];
  }
}
