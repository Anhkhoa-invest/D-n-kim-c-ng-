/**
 * Kim Cuong OS
 * Market Service
 * Market Service
 */

import { MarketManager } from "./MarketManager";

export class MarketService {

  constructor(
    private readonly manager = new MarketManager()
  ) {}

  load<T>(key: string): T | null {
    return this.manager.load<T>(key);
  }

  save<T>(key: string, data: T): void {
    this.manager.syncData(key, data);
  }

  clear(): void {
    this.manager.clear();
  }

}
