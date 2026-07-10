import ThorpPortfolio from "./ThorpPortfolio";

export default class ThorpPortfolioEngine {

  static calculate(): ThorpPortfolio {
    return {
      expectedReturn: 0,
      risk: 0,
      optimalLeverage: 0
    };
  }

}
