/**
 * Kim Cuong OS
 * Market Service
 * Market Manager
 */

import { MarketLoader } from "./MarketLoader";
import { MarketSync } from "./MarketSync";

export class MarketManager {

  constructor(
    private readonly loader = new MarketLoader(),
    private readonly sync = new MarketSync()
  ) {}

  load<T>(key: string): T | null {
    return this.loader.load<T>(key);
  }

  syncData<T>(key: string, data: T): void {
    this.sync.sync(key, data);
  }

  clear(): void {
    this.sync.clear();
  }

}
