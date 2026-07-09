import Portfolio from "./Portfolio";
import PortfolioRepository from "./PortfolioRepository";

export default class PortfolioService {

  static getAll() {
    return PortfolioRepository.getAll();
  }

  static create(portfolio: Portfolio) {
    return PortfolioRepository.save(portfolio);
  }

}