export interface StockQuote {
  code: string;
  price: number;
  change: number;
  percent: number;
  volume: number;
  updatedAt: string;
}

export interface IMarketDataProvider {
  getQuote(code: string): Promise<StockQuote>;
}

