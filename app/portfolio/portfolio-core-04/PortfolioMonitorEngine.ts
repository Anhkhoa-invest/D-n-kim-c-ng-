import PortfolioMonitor from "./PortfolioMonitor";

export default class PortfolioMonitorEngine {

    static monitor(): PortfolioMonitor {

        return {

            marketOpen: false,

            lastUpdated: new Date(),

            alerts: 0,

            watchlistChanges: 0,

            portfolioChanges: 0

        };

    }

}

