import type { MarketData } from "@/app/models/MarketData";

export default class MarketCache {

  private cache: Map<string, MarketData> = new Map();

  /**
   * Lưu Cache
   */
  public set(data: MarketData): void {

    this.cache.set(data.symbol, data);

  }

  /**
   * Lấy Cache
   */
  public get(symbol: string): MarketData | undefined {

    return this.cache.get(symbol);

  }

  /**
   * Xóa Cache
   */
  public clear(): void {

    this.cache.clear();

  }

}
