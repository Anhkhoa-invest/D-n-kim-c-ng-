import type { MarketData } from "@/app/models/MarketData";

export default class MarketFactory {

  /**
   * Tạo MarketData
   */
  public create(data: Partial<MarketData>): MarketData {

    return {

      symbol: data.symbol ?? "",
      name: data.name ?? "",

      price: data.price ?? 0,
      open: data.open ?? 0,
      high: data.high ?? 0,
      low: data.low ?? 0,
      previousClose: data.previousClose ?? 0,

      change: data.change ?? 0,
      percentChange: data.percentChange ?? 0,

      volume: data.volume ?? 0,
      value: data.value ?? 0,

      market: data.market ?? "HOSE",

      updatedAt: data.updatedAt ?? new Date()

    };

  }

  /**
   * Clone MarketData
   */
  public clone(item: MarketData): MarketData {

    return JSON.parse(JSON.stringify(item));

  }

}
