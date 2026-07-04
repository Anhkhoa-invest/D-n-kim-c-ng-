import MarketRepository from "../repositories/MarketRepository";

class MarketService {
  async getStockPrice(symbol: string) {
    return await MarketRepository.getStockPrice(symbol);
  }
}

export default new MarketService();

