import PortfolioPosition from "./PortfolioPosition";

export default class PortfolioPositionEngine {

    static calculate(): PortfolioPosition {

        return {

            symbol: "",

            quantity: 0,

            averagePrice: 0,

            currentPrice: 0,

            marketValue: 0,

            unrealizedProfit: 0,

            unrealizedProfitPercent: 0

        };

    }

}
