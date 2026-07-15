/**
 * Kim Cuong OS
 * Market Service
 * Market Loader
 */

import { MarketRepository } from "./MarketRepository";

export class MarketLoader {

  constructor(
    private readonly repository = new MarketRepository()
  ) {}

  load<T>(key: string): T | null {
    return this.repository.find<T>(key);
  }

  exists(key: string): boolean {
    return this.repository.exists(key);
  }

  clear(): void {
    this.repository.clear();
  }

}
