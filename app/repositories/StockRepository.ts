import { StockProfile } from "../models/StockProfile";

export class StockRepository {
  private static instance: StockRepository;

  private stocks: StockProfile[] = [];

  private constructor() {}

  static getInstance(): StockRepository {
    if (!StockRepository.instance) {
      StockRepository.instance = new StockRepository();
    }

    return StockRepository.instance;
  }

  getAll(): StockProfile[] {
    return this.stocks;
  }

  getBySymbol(symbol: string): StockProfile | undefined {
    return this.stocks.find(
      (stock) => stock.symbol === symbol
    );
  }

  save(stock: StockProfile): void {
    const index = this.stocks.findIndex(
      (s) => s.symbol === stock.symbol
    );

    if (index >= 0) {
      this.stocks[index] = stock;
    } else {
      this.stocks.push(stock);
    }
  }
}
