import SimonsPortfolio from "./SimonsPortfolio";

export default class SimonsPortfolioEngine {

  static calculate(): SimonsPortfolio {
    return {
      factorScore: 0,
      momentumScore: 0,
      qualityScore: 0,
      recommendation: "HOLD"
    };
  }

}
