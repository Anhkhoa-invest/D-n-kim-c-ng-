import Portfolio from "./Portfolio";
import Holding from "./Holding";

export default class PortfolioCalculator {

    static calculate(portfolio: Portfolio, holdings: Holding[]) {

        const totalCost = holdings.reduce(
            (sum, item) => sum + item.shares * item.averageCost,
            0
        );

        const totalValue = holdings.reduce(
            (sum, item) => sum + item.shares * item.currentPrice,
            0
        );

        const profit = totalValue - totalCost;

        const profitPercent =
            totalCost === 0
                ? 0
                : (profit / totalCost) * 100;

        return {
            portfolioId: portfolio.id,
            totalCost,
            totalValue,
            profit,
            profitPercent
        };
    }

}

