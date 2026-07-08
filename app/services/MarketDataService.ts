import StockRepository from "./StockRepository";

export default class MarketDataService {
  static getStock(symbol: string) {
    return StockRepository.get(symbol);
  }
}
