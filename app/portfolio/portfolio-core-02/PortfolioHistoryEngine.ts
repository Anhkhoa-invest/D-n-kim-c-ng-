import PortfolioHistory from "./PortfolioHistory";

export default class PortfolioHistoryEngine {

    static create(): PortfolioHistory {

        return {

            date: new Date(),

            totalValue: 0,

            totalCost: 0,

            totalProfit: 0,

            totalProfitPercent: 0

        };

    }

}
