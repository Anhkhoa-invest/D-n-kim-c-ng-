import axios from "axios";

export interface MarketData {
  symbol: string;
  price: number;
  change: number;
  percentChange: number;
  updatedAt: Date;
}

class VietnamMarketApi {async getStockPrice(symbol: string): Promise<MarketData> {
  return {
    symbol: symbol.toUpperCase(),
    price: 0,
    change: 0,
    percentChange: 0,
    updatedAt: new Date(),
  };
}



}

export default new VietnamMarketApi();
