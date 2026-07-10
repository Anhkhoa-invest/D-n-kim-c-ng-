import PortfolioPerformance from "./PortfolioPerformance";

export default class PortfolioPerformanceEngine {

    static calculate(): PortfolioPerformance {

        return {

            dailyReturn: 0,

            weeklyReturn: 0,

            monthlyReturn: 0,

            yearlyReturn: 0,

            cumulativeReturn: 0,

            benchmarkReturn: 0

        };

    }

}
