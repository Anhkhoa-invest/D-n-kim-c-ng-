import PortfolioMetrics from "./PortfolioMetrics";

export default class PortfolioMetricsEngine {

    static calculate(): PortfolioMetrics {

        return {

            sharpeRatio: 0,

            sortinoRatio: 0,

            alpha: 0,

            beta: 1,

            volatility: 0,

            maxDrawdown: 0

        };

    }

}
