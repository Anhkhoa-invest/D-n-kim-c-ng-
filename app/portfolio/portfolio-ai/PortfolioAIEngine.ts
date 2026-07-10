import GrahamPortfolioEngine from "./GrahamPortfolioEngine";
import BuffettPortfolioEngine from "./BuffettPortfolioEngine";
import KellyPortfolioEngine from "./KellyPortfolioEngine";
import ThorpPortfolioEngine from "./ThorpPortfolioEngine";
import SimonsPortfolioEngine from "./SimonsPortfolioEngine";
import DiamondScoreEngine from "./DiamondScoreEngine";

export default class PortfolioAIEngine {

  static analyze() {

    return {

      graham: GrahamPortfolioEngine.calculate(),

      buffett: BuffettPortfolioEngine.calculate(),

      kelly: KellyPortfolioEngine.calculate(),

      thorp: ThorpPortfolioEngine.calculate(),

      simons: SimonsPortfolioEngine.calculate(),

      diamond: DiamondScoreEngine.calculate()

    };

  }

}
