import PortfolioAdvisor from "./PortfolioAdvisor";

export default class PortfolioAIScore {

  static calculate() {

    const advisor = PortfolioAdvisor.advise();

    return {

      aiScore: advisor.score,

      grade: "C",

      confidence: 50,

      recommendation: advisor.recommendation

    };

  }

}
