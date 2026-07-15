/**
 * Kim Cuong OS
 * Market Core-06
 * Market Statistics
 */

export interface MarketStatisticsRecord {
  date: Date;
  totalStocks: number;
  advancing: number;
  declining: number;
  unchanged: number;
}

export class MarketStatistics {

  constructor(
    private records: MarketStatisticsRecord[] = []
  ) {}

  add(record: MarketStatisticsRecord): void {
    this.records.push(record);
  }

  getAll(): MarketStatisticsRecord[] {
    return this.records;
  }

  getLatest(): MarketStatisticsRecord | null {
    return this.records.length > 0
      ? this.records[this.records.length - 1]
      : null;
  }

  getAdvanceRatio(): number {
    const latest = this.getLatest();

    if (!latest || latest.totalStocks === 0) {
      return 0;
    }

    return latest.advancing / latest.totalStocks;
  }

  clear(): void {
    this.records = [];
  }

}
