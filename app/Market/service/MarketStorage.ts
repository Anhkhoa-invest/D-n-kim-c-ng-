/**
 * Kim Cuong OS
 * Market Service
 * Market Storage
 */

export class MarketStorage {
  private storage = new Map<string, unknown>();

  save(key: string, value: unknown): void {
    this.storage.set(key, structuredClone(value));
  }

  load<T>(key: string): T | null {
    return (this.storage.get(key) as T) ?? null;
  }

  has(key: string): boolean {
    return this.storage.has(key);
  }

  remove(key: string): void {
    this.storage.delete(key);
  }

  clear(): void {
    this.storage.clear();
  }

  keys(): string[] {
    return [...this.storage.keys()];
  }

  size(): number {
    return this.storage.size;
  }
}
