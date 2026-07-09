import { PortfolioItem } from "../../types/portfolio";
export class PortfolioCalculator {
  static totalCost(stocks: PortfolioItem[]) {
    return stocks.reduce(
      (sum, stock) => sum + stock.buyPrice * stock.quantity,
      0
    );
  }
  static totalValue(stocks: PortfolioItem[]) {
    return stocks.reduce(
      (sum, stock) => sum + stock.currentPrice * stock.quantity,
      0
    );
  }
  static profit(stocks: PortfolioItem[]) {
    return this.totalValue(stocks) - this.totalCost(stocks);
  }
  static percent(stocks: PortfolioItem[]) {
    const cost = this.totalCost(stocks);

    if (cost === 0) return 0;

    return (this.profit(stocks) / cost) * 100;
  }
}
