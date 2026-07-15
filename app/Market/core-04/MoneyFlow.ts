/**
 * Kim Cương OS
 * Market Core-04
 * Money Flow Analyzer
 */

export interface MoneyFlowRecord {
  symbol: string;
  inflow: number;
  outflow: number;
  netFlow: number;
  date: Date;
}

export class MoneyFlow {

  constructor(
    private records: MoneyFlowRecord[] = []
  ) {}

  add(record: MoneyFlowRecord): void {
    this.records.push(record);
  }

  getAll(): MoneyFlowRecord[] {
    return this.records;
  }

  getTotalInflow(): number {
    return this.records.reduce(
      (sum, record) => sum + record.inflow,
      0
    );
  }

  getTotalOutflow(): number {
    return this.records.reduce(
      (sum, record) => sum + record.outflow,
      0
    );
  }

  getNetFlow(): number {
    return this.records.reduce(
      (sum, record) => sum + record.netFlow,
      0
    );
  }

  getStrongestInflow(): MoneyFlowRecord | null {
    if (this.records.length === 0) return null;

    return this.records.reduce((best, current) =>
      current.netFlow > best.netFlow ? current : best
    );
  }

  clear(): void {
    this.records = [];
  }
}
