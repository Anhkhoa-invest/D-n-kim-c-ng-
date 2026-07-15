/**
 * Kim Cuong OS
 * Market Service
 * Market Cache
 */

export class MarketCache {
  private cache = new Map<string, unknown>();

  set(key: string, value: unknown): void {
    this.cache.set(key, structuredClone(value));
  }

  get<T>(key: string): T | null {
    return (this.cache.get(key) as T) ?? null;
  }

  has(key: string): boolean {
    return this.cache.has(key);
  }

  remove(key: string): void {
    this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }
}
