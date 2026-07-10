import PortfolioReturn from "./PortfolioReturn";

export default class PortfolioReturnEngine {

    static calculate(): PortfolioReturn {

        return {

            realizedReturn: 0,

            unrealizedReturn: 0,

            totalReturn: 0,

            returnPercent: 0,

            annualizedReturn: 0,

            dividendReturn: 0

        };

    }

}
