import HttpClient from "./HttpClient";
import { MarketData } from "../models/MarketData";

class VietnamMarketApi {
  async getStockPrice(symbol: string): Promise<MarketData> {
    return {
      symbol: symbol.toUpperCase(),
      name: "",

      price: 0,
      open: 0,
      high: 0,
      low: 0,
      previousClose: 0,

      change: 0,
      percentChange: 0,

      volume: 0,
      value: 0,

      market: "VN",

      updatedAt: new Date(),
    };
  }
}

export default new VietnamMarketApi();
