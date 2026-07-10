import PortfolioAIEngine from "./PortfolioAIEngine";

export default class PortfolioAdvisor {

  static advise() {

    const ai = PortfolioAIEngine.analyze();

    return {

      score: 0,

      recommendation: "HOLD",

      targetAllocation: {

        stocks: 60,

        cash: 20,

        bonds: 10,

        etf: 10

      },

      analysis: ai

    };

  }

}
