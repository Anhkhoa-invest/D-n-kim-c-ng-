import VietnamMarketProvider from "../providers/VietnamMarketProvider";

export class MarketRepository {
  async getStockPrice(symbol: string) {
    return await VietnamMarketProvider.getStockPrice(symbol);
  }
}

export default new MarketRepository();

