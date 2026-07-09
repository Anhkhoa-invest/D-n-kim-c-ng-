import PortfolioService from "./PortfolioService";
import Portfolio from "./Portfolio";

export default class PortfolioManager {

  static load() {
    return PortfolioService.getAll();
  }

  static create(portfolio: Portfolio) {
    return PortfolioService.create(portfolio);
  }

}
