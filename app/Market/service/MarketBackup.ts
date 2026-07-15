/**
 * Kim Cuong OS
 * Market Service
 * Market Backup
 */

export class MarketBackup {
  private backupData: unknown = null;

  save(data: unknown): void {
    this.backupData = structuredClone(data);
  }

  load<T>(): T | null {
    return this.backupData as T | null;
  }

  hasBackup(): boolean {
    return this.backupData !== null;
  }

  clear(): void {
    this.backupData = null;
  }
}
