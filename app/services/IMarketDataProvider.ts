
export interface MarketQuote {
  symbol: string;
  price: number;
  change: number;
  percent: number;
  volume: number;
  updatedAt: Date;
}

export interface IMarketDataProvider {
  getQuote(symbol: string): Promise<MarketQuote>;
}

