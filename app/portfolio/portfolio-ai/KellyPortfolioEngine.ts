import KellyPortfolio from "./KellyPortfolio";

export default class KellyPortfolioEngine {

  static calculate(): KellyPortfolio {
    return {
      winProbability: 0,
      winLossRatio: 0,
      kellyFraction: 0
    };
  }

}
