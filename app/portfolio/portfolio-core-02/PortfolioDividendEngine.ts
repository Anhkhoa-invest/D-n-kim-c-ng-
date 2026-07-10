import PortfolioDividend from "./PortfolioDividend";

export default class PortfolioDividendEngine {

    static calculate(): PortfolioDividend {

        return {

            yearlyIncome: 0,

            monthlyAverage: 0,

            dividendYield: 0,

            nextPayment: null,

            upcomingDividends: 0

        };

    }

}
