import { PortfolioItem } from "../../types/portfolio";
import { PortfolioStorage } from "./PortfolioStorage";

export class PortfolioService {
  static loadPortfolio(defaultData: PortfolioItem[]): PortfolioItem[] {
    return PortfolioStorage.load(defaultData);
  }

  static savePortfolio(data: PortfolioItem[]) {
    PortfolioStorage.save(data);
  }

  static addStock(
    stocks: PortfolioItem[],
    stock: PortfolioItem
  ): PortfolioItem[] {
    return [...stocks, stock];
  }

  static deleteStock(
    stocks: PortfolioItem[],
    index: number
  ): PortfolioItem[] {
    return stocks.filter((_, i) => i !== index);
  }

  static updateStock(
    stocks: PortfolioItem[],
    index: number,
    stock: PortfolioItem
  ): PortfolioItem[] {
    const updated = [...stocks];
    updated[index] = stock;
    return updated;
  }
}
