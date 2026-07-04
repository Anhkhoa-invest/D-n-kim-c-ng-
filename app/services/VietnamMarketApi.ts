import HttpClient from "./HttpClient";
import { MarketData } from "../models/MarketData";

class VietnamMarketApi {
  async getStockPrice(symbol: string): Promise<MarketData> {
    try {
      const response = await HttpClient.get(`/stock/${symbol}`);

      console.log(response.data);

      return {
  symbol: symbol.toUpperCase(),
  name: response.data.name || "",

  price: response.data.price || 0,
  open: response.data.open || 0,
  high: response.data.high || 0,
  low: response.data.low || 0,
  previousClose: response.data.previousClose || 0,

  change: response.data.change || 0,
  percentChange: response.data.percentChange || 0,

  volume: response.data.volume || 0,
  value: response.data.value || 0,

  market: response.data.market || "VN",
  updatedAt: new Date(),
};

    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new VietnamMarketApi();

