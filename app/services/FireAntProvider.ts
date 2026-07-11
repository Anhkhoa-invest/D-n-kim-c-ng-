import {
  IMarketDataProvider,
  MarketQuote,
} from "./IMarketDataProvider";

import ApiClient from "./ApiClient";


export default class FireAntProvider implements IMarketDataProvider {

  async getQuote(symbol: string): Promise<MarketQuote> {

    // Sprint 12
    // Tạm mô phỏng dữ liệu
    // Sprint sau sẽ gọi API FireAnt thật

    console.log("Preparing FireAnt API:", symbol);

    return {
      symbol,
      price: 0,
      change: 0,
      percent: 0,
      volume: 0,
      updatedAt: new Date(),
    };
  }

}
