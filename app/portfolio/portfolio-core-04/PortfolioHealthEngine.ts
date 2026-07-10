import PortfolioHealth from "./PortfolioHealth";

export default class PortfolioHealthEngine {

    static calculate(): PortfolioHealth {

        return {

            score: 0,

            diversification: 0,

            liquidity: 0,

            concentration: 0,

            risk: 0,

            grade: "C"

        };

    }

}
