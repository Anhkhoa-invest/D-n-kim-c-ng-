import PortfolioCalculator from "./PortfolioCalculator";
import PortfolioPerformance from "./PortfolioPerformance";
import PortfolioAnalytics from "./PortfolioAnalytics";

export default class PortfolioEngine {

    static calculate(portfolio: any) {

        return {

            summary: PortfolioCalculator.calculate(
    portfolio,
    portfolio.holdings
),


            performance: PortfolioPerformance.calculate(portfolio),

            analytics: PortfolioAnalytics.calculate(portfolio)

        };

    }

}
