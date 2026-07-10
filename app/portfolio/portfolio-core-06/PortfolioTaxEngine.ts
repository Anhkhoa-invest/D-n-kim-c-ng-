import PortfolioTax from "./PortfolioTax";

export default class PortfolioTaxEngine {

    static calculate(): PortfolioTax {

        return {

            dividendTax: 0,

            capitalGainTax: 0,

            withholdingTax: 0,

            estimatedTax: 0,

            totalTax: 0,

            taxRate: 0

        };

    }

}
