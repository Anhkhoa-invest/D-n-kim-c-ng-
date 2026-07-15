/**
 * Kim Cuong OS
 * Market Core-05
 * Market Strength Analyzer
 */

export interface MarketStrengthRecord {
  symbol: string;
  strength: number;
  score: number;
  date: Date;
}

export class MarketStrength {

  constructor(
    private records: MarketStrengthRecord[] = []
  ) {}

  add(record: MarketStrengthRecord): void {
    this.records.push(record);
  }

  getAll(): MarketStrengthRecord[] {
    return this.records;
  }

  getAverageStrength(): number {
    if (this.records.length === 0) {
      return 0;
    }

    const total = this.records.reduce(
      (sum, record) => sum + record.strength,
      0
    );

    return total / this.records.length;
  }

  getStrongest(): MarketStrengthRecord | null {
    if (this.records.length === 0) {
      return null;
    }

    return this.records.reduce((best, current) =>
      current.strength > best.strength
        ? current
        : best
    );
  }

  getLatest(): MarketStrengthRecord | null {
    return this.records.length > 0
      ? this.records[this.records.length - 1]
      : null;
  }

  clear(): void {
    this.records = [];
  }
}
