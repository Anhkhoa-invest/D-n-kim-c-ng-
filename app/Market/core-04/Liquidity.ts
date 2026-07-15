/**
 * Kim Cương OS
 * Market Core-04
 * Liquidity Analyzer
 */

export interface LiquidityRecord {
  symbol: string;
  volume: number;
  value: number;
  averageVolume: number;
  turnoverRate: number;
  date: Date;
}

export class Liquidity {

  constructor(
    private records: LiquidityRecord[] = []
  ) {}

  add(record: LiquidityRecord): void {
    this.records.push(record);
  }

  getAll(): LiquidityRecord[] {
    return this.records;
  }

  getTotalVolume(): number {
    return this.records.reduce(
      (sum, record) => sum + record.volume,
      0
    );
  }

  getTotalValue(): number {
    return this.records.reduce(
      (sum, record) => sum + record.value,
      0
    );
  }

  getAverageTurnoverRate(): number {
    if (this.records.length === 0) return 0;

    const total = this.records.reduce(
      (sum, record) => sum + record.turnoverRate,
      0
    );

    return total / this.records.length;
  }

  getHighestLiquidity(): LiquidityRecord | null {
    if (this.records.length === 0) return null;

    return this.records.reduce((highest, current) =>
      current.value > highest.value ? current : highest
    );
  }

  clear(): void {
    this.records = [];
  }
}

