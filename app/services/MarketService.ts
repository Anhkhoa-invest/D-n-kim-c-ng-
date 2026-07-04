import VietnamMarketApi from "./VietnamMarketApi";

class MarketService {
  async getStockPrice(symbol: string) {
    return await VietnamMarketApi.getStockPrice(symbol);
  }
}

export default new MarketService();
