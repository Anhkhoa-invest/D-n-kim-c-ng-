import PortfolioForecast from "./PortfolioForecast";

export default class PortfolioForecastEngine {

    static forecast(): PortfolioForecast {

        return {

            oneMonth: 0,

            threeMonths: 0,

            sixMonths: 0,

            oneYear: 0,

            confidence: 0

        };

    }

}
