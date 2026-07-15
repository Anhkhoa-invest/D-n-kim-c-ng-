/**
 * Kim Cuong OS
 * Market Service
 * Market Factory
 */

import { MarketRepository } from "./MarketRepository";
import { MarketCache } from "./MarketCache";
import { MarketStorage } from "./MarketStorage";

export class MarketFactory {

  createRepository(): MarketRepository {
    return new MarketRepository();
  }

  createCache(): MarketCache {
    return new MarketCache();
  }

  createStorage(): MarketStorage {
    return new MarketStorage();
  }

}
