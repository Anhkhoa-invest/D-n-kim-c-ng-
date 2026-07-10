import PortfolioCapital from "./PortfolioCapital";

export default class PortfolioCapitalEngine {

    static calculate(): PortfolioCapital {

        return {

            initialCapital: 0,

            currentCapital: 0,

            investedCapital: 0,

            availableCash: 0,

            profit: 0,

            profitPercent: 0

        };

    }

}

