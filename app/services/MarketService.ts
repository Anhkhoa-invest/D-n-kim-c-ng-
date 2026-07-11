import MarketDataGateway from "./MarketDataGateway";
import { SourceManager } from "./SourceManager";


class MarketService {
  async getStockPrice(symbol: string) {
    const provider = MarketDataGateway.getProvider();
    return await provider.getQuote(symbol);
  }

  async getManyPrices(symbols: string[]) {
    return Promise.all(
      symbols.map((symbol) => this.getStockPrice(symbol))
    );
  }

  async isMarketOpen() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();

    const current = hour * 60 + minute;

    const morning =
      current >= 9 * 60 && current <= 11 * 60 + 30;

    const afternoon =
      current >= 13 * 60 && current <= 15 * 60;

    return morning || afternoon;
  }
}

export default new MarketService();

