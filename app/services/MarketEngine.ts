import VietnamMarketProvider from "../providers/VietnamMarketProvider";

class MarketEngine {
  async getStockPrice(symbol: string) {
    return await VietnamMarketProvider.getStockPrice(symbol);
  }
}

export default new MarketEngine();

