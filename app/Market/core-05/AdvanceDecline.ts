/**
 * Kim Cương OS
 * Market Core-05
 * Advance / Decline Analyzer
 */

export interface AdvanceDeclineRecord {
  advances: number;
  declines: number;
  unchanged: number;
  date: Date;
}

export class AdvanceDecline {

  constructor(
    private records: AdvanceDeclineRecord[] = []
  ) {}

  add(record: AdvanceDeclineRecord): void {
    this.records.push(record);
  }

  getAll(): AdvanceDeclineRecord[] {
    return this.records;
  }

  getAdvanceDeclineRatio(): number {
    if (this.records.length === 0) {
      return 0;
    }

    const latest = this.records[this.records.length - 1];

    return latest.declines === 0
      ? latest.advances
      : latest.advances / latest.declines;
  }

  getLatest(): AdvanceDeclineRecord | null {
    return this.records.length > 0
      ? this.records[this.records.length - 1]
      : null;
  }

  clear(): void {
    this.records = [];
  }
}
