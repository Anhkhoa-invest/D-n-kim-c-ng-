import MarketDataGateway from "./MarketDataGateway";

export interface PriceData {
  code: string;
  price: number;
  change: number;
  percent: number;
  updatedAt: string;
}

export class RealtimePriceService {

  static async getPrice(code: string): Promise<PriceData> {

    const provider = MarketDataGateway.getProvider();

    const quote = await provider.getQuote(code);

    return {
      code: quote.symbol,
      price: quote.price,
      change: quote.change,
      percent: quote.percent,
      updatedAt: quote.updatedAt.toLocaleTimeString(),
    };

  }

}
