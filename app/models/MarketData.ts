export interface MarketData {
  symbol: string;
  name: string;

  price: number;
  open: number;
  high: number;
  low: number;
  previousClose: number;

  change: number;
  percentChange: number;

  volume: number;
  value: number;

  market: string;

  updatedAt: Date;
}
