import { StockProfile } from "../models/StockProfile";

export default class StockRepository {

  private static instance: StockRepository;

  private stocks: StockProfile[] = [];

  private constructor() {}

  public static getInstance(): StockRepository {

    if (!StockRepository.instance) {

      StockRepository.instance = new StockRepository();

    }

    return StockRepository.instance;

  }

  public getAll(): StockProfile[] {

    return [...this.stocks];

  }

  public getBySymbol(symbol: string): StockProfile | undefined {

    return this.stocks.find(

      stock => stock.symbol === symbol

    );

  }

  public save(stock: StockProfile): void {

    const index = this.stocks.findIndex(

      s => s.symbol === stock.symbol

    );

    if (index >= 0) {

      this.stocks[index] = stock;

    } else {

      this.stocks.push(stock);

    }

  }

  public saveMany(stocks: StockProfile[]): void {

    stocks.forEach(stock => this.save(stock));

  }

  public exists(symbol: string): boolean {

    return this.stocks.some(

      stock => stock.symbol === symbol

    );

  }

  public count(): number {

    return this.stocks.length;

  }

  public remove(symbol: string): void {

    this.stocks = this.stocks.filter(

      stock => stock.symbol !== symbol

    );

  }

  public clear(): void {

    this.stocks = [];

  }

}
