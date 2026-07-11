import {
  IMarketDataProvider,
  MarketQuote,
} from "./IMarketDataProvider";

export default class MockMarketProvider implements IMarketDataProvider {

  async getQuote(symbol: string): Promise<MarketQuote> {
    return {
      symbol,
      price: +(Math.random() * 100).toFixed(2),
      change: +((Math.random() - 0.5) * 2).toFixed(2),
      percent: +((Math.random() - 0.5) * 5).toFixed(2),
      volume: Math.floor(Math.random() * 1000000),
      updatedAt: new Date(),
    };
  }

}
