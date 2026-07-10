import PortfolioStrategy from "./PortfolioStrategy";

export default class PortfolioStrategyEngine {

    static create(): PortfolioStrategy {

        return {

            strategy: "",

            targetAllocation: "",

            rebalanceFrequency: "Quarterly",

            riskTolerance: "Medium",

            investmentStyle: "Long Term",

            notes: ""

        };

    }

}
