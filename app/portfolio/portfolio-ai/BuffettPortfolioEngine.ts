import BuffettPortfolio from "./BuffettPortfolio";

export default class BuffettPortfolioEngine {

  static calculate(): BuffettPortfolio {
    return {
      moatScore: 0,
      managementScore: 0,
      intrinsicValue: 0,
      recommendation: "HOLD"
    };
  }

}
