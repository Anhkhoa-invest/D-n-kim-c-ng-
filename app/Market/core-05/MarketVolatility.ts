/**
 * Kim Cuong OS
 * Market Core-05
 * Market Volatility Analyzer
 */

export interface MarketVolatilityRecord {
  symbol: string;
  volatility: number;
  atr: number;
  date: Date;
}

export class MarketVolatility {

  constructor(
    private records: MarketVolatilityRecord[] = []
  ) {}

  add(record: MarketVolatilityRecord): void {
    this.records.push(record);
  }

  getAll(): MarketVolatilityRecord[] {
    return this.records;
  }

  getAverageVolatility(): number {
    if (this.records.length === 0) {
      return 0;
    }

    const total = this.records.reduce(
      (sum, record) => sum + record.volatility,
      0
    );

    return total / this.records.length;
  }

  getHighestVolatility(): MarketVolatilityRecord | null {
    if (this.records.length === 0) {
      return null;
    }

    return this.records.reduce((highest, current) =>
      current.volatility > highest.volatility
        ? current
        : highest
    );
  }

  getLatest(): MarketVolatilityRecord | null {
    return this.records.length > 0
      ? this.records[this.records.length - 1]
      : null;
  }

  clear(): void {
    this.records = [];
  }
}
