import PortfolioStatistics from "./PortfolioStatistics";

export default class PortfolioStatisticsEngine {

    static calculate(): PortfolioStatistics {

        return {

            totalTrades: 0,

            winningTrades: 0,

            losingTrades: 0,

            winRate: 0,

            averageGain: 0,

            averageLoss: 0

        };

    }

}
