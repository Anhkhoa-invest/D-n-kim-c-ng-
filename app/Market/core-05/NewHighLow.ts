/**
 * Kim Cuong OS
 * Market Core-05
 * New High / New Low Analyzer
 */

export interface NewHighLowRecord {
  symbol: string;
  isNewHigh: boolean;
  isNewLow: boolean;
  price: number;
  date: Date;
}

export class NewHighLow {

  constructor(
    private records: NewHighLowRecord[] = []
  ) {}

  add(record: NewHighLowRecord): void {
    this.records.push(record);
  }

  getAll(): NewHighLowRecord[] {
    return this.records;
  }

  getNewHighCount(): number {
    return this.records.filter(
      record => record.isNewHigh
    ).length;
  }

  getNewLowCount(): number {
    return this.records.filter(
      record => record.isNewLow
    ).length;
  }

  getLatest(): NewHighLowRecord | null {
    return this.records.length > 0
      ? this.records[this.records.length - 1]
      : null;
  }

  clear(): void {
    this.records = [];
  }
}