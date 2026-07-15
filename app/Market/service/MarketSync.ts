/**
 * Kim Cuong OS
 * Market Service
 * Market Sync
 */

import { MarketRepository } from "./MarketRepository";
import { MarketCache } from "./MarketCache";

export class MarketSync {

  constructor(
    private readonly repository = new MarketRepository(),
    private readonly cache = new MarketCache()
  ) {}

  sync<T>(key: string, data: T): void {
    this.repository.save(key, data);
    this.cache.set(key, data);
  }

  load<T>(key: string): T | null {
    if (this.cache.has(key)) {
      return this.cache.get<T>(key);
    }

    return this.repository.find<T>(key);
  }

  clear(): void {
    this.cache.clear();
    this.repository.clear();
  }

}
