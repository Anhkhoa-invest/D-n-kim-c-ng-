import MarketEngine from "../services/MarketEngine";

class MarketRepository {
  async getStockPrice(symbol: string) {
    return await MarketEngine.getStockPrice(symbol);
  }
}

export default new MarketRepository();
