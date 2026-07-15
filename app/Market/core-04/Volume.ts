/**
 * Kim Cương OS
 * Market Core-04
 * Volume Analyzer
 */

export interface VolumeRecord {
  symbol: string;
  volume: number;
  averageVolume: number;
  value: number;
  ratio: number;
  date: Date;
}

export class Volume {

  constructor(
    private records: VolumeRecord[] = []
  ) {}

  add(record: VolumeRecord): void {
    this.records.push(record);
  }

  getAll(): VolumeRecord[] {
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

  getAverageRatio(): number {
    if (this.records.length === 0) return 0;

    const total = this.records.reduce(
      (sum, record) => sum + record.ratio,
      0
    );

    return total / this.records.length;
  }

  getHighestVolume(): VolumeRecord | null {
    if (this.records.length === 0) return null;

    return this.records.reduce((highest, current) =>
      current.volume > highest.volume ? current : highest
    );
  }

  clear(): void {
    this.records = [];
  }
}
