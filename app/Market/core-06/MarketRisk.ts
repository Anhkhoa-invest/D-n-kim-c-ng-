/**
 * Kim Cuong OS
 * Market Core-06
 * Market Risk
 */

export interface MarketRiskRecord {
  date: Date;
  level: "Low" | "Medium" | "High" | "Extreme";
  score: number;
  description: string;
}

export class MarketRisk {

  constructor(
    private records: MarketRiskRecord[] = []
  ) {}

  add(record: MarketRiskRecord): void {
    this.records.push(record);
  }

  getAll(): MarketRiskRecord[] {
    return this.records;
  }

  getLatest(): MarketRiskRecord | null {
    return this.records.length > 0
      ? this.records[this.records.length - 1]
      : null;
  }

  getHighestRisk(): MarketRiskRecord | null {
    if (this.records.length === 0) return null;

    return this.records.reduce((highest, current) =>
      current.score > highest.score
        ? current
        : highest
    );
  }

  clear(): void {
    this.records = [];
  }

}
