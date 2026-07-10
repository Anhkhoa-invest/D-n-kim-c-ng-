import Portfolio from "../portfolio-core/Portfolio";
import Holding from "../portfolio-core/Holding";
import PortfolioAllocation from "./PortfolioAllocation";

export default class PortfolioAllocationEngine {

    static calculate(
        portfolio: Portfolio,
        holdings: Holding[]
    ): PortfolioAllocation {

        const totalValue =
            holdings.reduce(
                (sum, h) => sum + h.currentPrice * h.shares,
                0
            );

        const cash =
            portfolio.cash;

        const portfolioValue =
            totalValue + cash;

        return {

            portfolioId: portfolio.id,

            totalValue: portfolioValue,

            cashPercent:
                portfolioValue === 0
                    ? 0
                    : (cash / portfolioValue) * 100,

            stockPercent:
                portfolioValue === 0
                    ? 0
                    : (totalValue / portfolioValue) * 100,

            sectorAllocation: {},

            assetAllocation: {}

        };

    }

}

