import MarketEngine from "./MarketEngine";

class MarketService {
  async getStockPrice(symbol: string) {
    return await MarketEngine.getStockPrice(symbol);
  }
}

export default new MarketService();
