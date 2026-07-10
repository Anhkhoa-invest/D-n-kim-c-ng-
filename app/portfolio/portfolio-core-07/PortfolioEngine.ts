import PortfolioAdvisor from "../portfolio-ai/PortfolioAdvisor";
import PortfolioOptimizer from "../portfolio-ai/PortfolioOptimizer";
import PortfolioAIScore from "../portfolio-ai/PortfolioAIScore";

export default class PortfolioEngine {

  static build() {

    return {

      advisor: PortfolioAdvisor.advise(),

      optimizer: PortfolioOptimizer.optimize(),

      aiScore: PortfolioAIScore.calculate()

    };

  }

}
