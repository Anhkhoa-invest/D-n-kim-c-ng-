import Portfolio from "../portfolio-core/Portfolio";
import Holding from "../portfolio-core/Holding";
import PortfolioSummary from "./PortfolioSummary";

export default class PortfolioSummaryEngine {

    static calculate(
        portfolio: Portfolio,
        holdings: Holding[]
    ): PortfolioSummary {

        const totalCost =
            holdings.reduce(
                (sum, h) => sum + h.averageCost * h.shares,
                0
            );

        const totalValue =
            holdings.reduce(
                (sum, h) => sum + h.currentPrice * h.shares,
                0
            );

        const totalProfit =
            totalValue - totalCost;

        const totalProfitPercent =
            totalCost === 0
                ? 0
                : (totalProfit / totalCost) * 100;

        return {

            portfolioId: portfolio.id,

            totalAssets: holdings.length,

            totalCost,

            totalValue,

            totalProfit,

            totalProfitPercent,

            cash: portfolio.cash,

            holdings: holdings.length,

            createdAt: portfolio.createdAt,

            updatedAt: portfolio.updatedAt

        };

    }

}
