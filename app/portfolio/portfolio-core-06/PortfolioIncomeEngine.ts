import PortfolioIncome from "./PortfolioIncome";

export default class PortfolioIncomeEngine {

    static calculate(): PortfolioIncome {

        return {

            dividendIncome: 0,

            interestIncome: 0,

            realizedIncome: 0,

            unrealizedIncome: 0,

            totalIncome: 0,

            monthlyIncome: 0

        };

    }

}
