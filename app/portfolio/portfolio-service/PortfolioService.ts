import DatabaseService from "../../database/DatabaseService";
export interface PortfolioItem {
  id: string;
  symbol: string;
  name: string;
  quantity: number;
  averagePrice: number;
  currentPrice: number;
  aiScore?: number;
}
export default class PortfolioService {
  private portfolio: PortfolioItem[] = [];
  constructor(items: PortfolioItem[] = []) {
    this.portfolio = items;
  }
  public getPortfolio(): PortfolioItem[] {
    return this.portfolio;
  }
  public getStock(symbol: string): PortfolioItem | undefined {
    return this.portfolio.find(
      item => item.symbol === symbol
    );
  }
  public addStock(item: PortfolioItem): void {
    this.portfolio.push(item);
  }

  public updateStock(
    symbol: string,
    data: Partial<PortfolioItem>
  ): boolean {

    const stock = this.getStock(symbol);

    if (!stock) return false;

    Object.assign(stock, data);

    return true;
  }

  public removeStock(symbol: string): boolean {

    const index = this.portfolio.findIndex(
      item => item.symbol === symbol
    );

    if (index === -1) return false;

    this.portfolio.splice(index, 1);

    return true;
  }

  public calculatePortfolioValue(): number {

    return this.portfolio.reduce((total, item) => {

      return total + item.quantity * item.currentPrice;

    }, 0);

  }

  public calculateTotalCost(): number {

    return this.portfolio.reduce((total, item) => {

      return total + item.quantity * item.averagePrice;

    }, 0);

  }

  public calculateProfitLoss(): number {

    return this.calculatePortfolioValue() - this.calculateTotalCost();

  }
  


  public calculateProfitPercent(): number {

    const cost = this.calculateTotalCost();

    if (cost === 0) return 0;

    return (this.calculateProfitLoss() / cost) * 100;

  }

  public calculateAllocation() {

    const total = this.calculatePortfolioValue();

    return this.portfolio.map(item => ({

      symbol: item.symbol,

      allocation:
        total === 0
          ? 0
          : ((item.quantity * item.currentPrice) / total) * 100

    }));

  }

  public clearPortfolio(): void {
    this.portfolio = [];
  }

  public getTotalStocks(): number {
    return this.portfolio.length;
  }

 public savePortfolio(): void {

    DatabaseService.save("portfolio", {
        items: this.portfolio,
    });

}
public loadPortfolio(): void {

    const data = DatabaseService.all("portfolio");

    if (data.length > 0) {
        this.portfolio = data[0].items as PortfolioItem[];
    }

}


  public syncPortfolio(): void {

    console.log("Portfolio Synced");

  }

}


