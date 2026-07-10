import Portfolio from "./Portfolio";

export default class PortfolioRepository {

  private static portfolios: Portfolio[] = [];

  static getAll() {
    return this.portfolios;
  }

  static save(portfolio: Portfolio) {
    this.portfolios.push(portfolio);
    return portfolio;
  }

  static findById(id: string) {
    return this.portfolios.find((p: any) => p.id === id);
  }

  static update(portfolio: Portfolio) {
    const index = this.portfolios.findIndex(
      (p: any) => p.id === (portfolio as any).id
    );

    if (index >= 0) {
      this.portfolios[index] = portfolio;
    }

    return portfolio;
  }

  static delete(id: string) {
    this.portfolios = this.portfolios.filter(
      (p: any) => p.id !== id
    );
  }

}
