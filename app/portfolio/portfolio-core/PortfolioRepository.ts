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

}
