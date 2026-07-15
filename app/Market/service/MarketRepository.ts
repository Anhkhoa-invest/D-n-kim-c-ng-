/**
 * Kim Cuong OS
 * Market Service
 * Market Repository
 */

import { MarketStorage } from "./MarketStorage";

export class MarketRepository {
  constructor(
    private readonly storage = new MarketStorage()
  ) {}

  save<T>(key: string, data: T): void {
    this.storage.save(key, data);
  }

  find<T>(key: string): T | null {
    return this.storage.load<T>(key);
  }

  exists(key: string): boolean {
    return this.storage.has(key);
  }

  remove(key: string): void {
    this.storage.remove(key);
  }

  clear(): void {
    this.storage.clear();
  }

  keys(): string[] {
    return this.storage.keys();
  }
}
