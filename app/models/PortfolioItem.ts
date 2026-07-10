export interface PortfolioItem {
  id: string;
  symbol: string;
  quantity: number;
  averagePrice: number;
  currentPrice: number;
  createdAt: Date;
  updatedAt: Date;
}
