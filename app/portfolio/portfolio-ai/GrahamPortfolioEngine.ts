
import GrahamPortfolio from "./GrahamPortfolio";

export default class GrahamPortfolioEngine {

  static calculate(): GrahamPortfolio {
    return {
      intrinsicValue: 0,
      marginOfSafety: 0,
      fairPrice: 0,
      recommendation: "HOLD"
    };
  }

}
