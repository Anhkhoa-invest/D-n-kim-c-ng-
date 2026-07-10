import Portfolio from "./Portfolio";
import PortfolioRepository from "./PortfolioRepository";

export default class PortfolioService {

  static getAll() {
    return PortfolioRepository.getAll();
  }

  static create(portfolio: Portfolio) {
    return PortfolioRepository.save(portfolio);
  }

  static update(portfolio: Portfolio) {
    return PortfolioRepository.update(portfolio);
  }

  static delete(id: string) {
    return PortfolioRepository.delete(id);
  }

  static findById(id: string) {
    return PortfolioRepository.findById(id);
  }

}
