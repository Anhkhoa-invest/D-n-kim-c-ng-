import MarketConfig from "../config/MarketConfig";
import HttpClient from "./HttpClient";
import { MarketData } from "../models/MarketData";

class VietnamMarketApi {
  async getStockPrice(symbol: string): Promise<MarketData> {
    try {
      const response = await HttpClient.get(
  `${MarketConfig.vietnam.stockEndpoint}?q=code:${symbol}`
);

      console.log(response.data);
const stock = response.data.data?.[0];
      return {
  symbol: symbol.toUpperCase(),
 name: stock?.companyName || "",

price: stock?.price || 0,
open: stock?.open || 0,
high: stock?.high || 0,
low: stock?.low || 0,
previousClose: stock?.priorClosePrice || 0,

change: stock?.change || 0,
percentChange: stock?.pctChange || 0,

volume: stock?.nmVolume || 0,
value: stock?.nmValue || 0,

market: stock?.exchange || "VN",
updatedAt: new Date(),


};

    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new VietnamMarketApi();

