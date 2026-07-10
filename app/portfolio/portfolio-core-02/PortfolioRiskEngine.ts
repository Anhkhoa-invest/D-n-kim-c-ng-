import PortfolioRisk from "./PortfolioRisk";

export default class PortfolioRiskEngine {

    static calculate(): PortfolioRisk {

        return {

            score: 0,

            level: "LOW",

            volatility: 0,

            beta: 0,

            sharpe: 0,

            maxDrawdown: 0

        };

    }

}
