import PortfolioAdvisor from "./PortfolioAdvisor";

export default class PortfolioOptimizer {

  static optimize() {

    const advisor = PortfolioAdvisor.advise();

    return {

      optimizedAllocation: advisor.targetAllocation,

      expectedReturn: 0,

      expectedRisk: 0,

      expectedSharpe: 0

    };

  }

}

