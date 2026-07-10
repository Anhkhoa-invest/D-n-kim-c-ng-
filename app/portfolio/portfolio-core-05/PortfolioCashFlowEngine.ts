import PortfolioCashFlow from "./PortfolioCashFlow";

export default class PortfolioCashFlowEngine {

    static calculate(): PortfolioCashFlow {

        return {

            totalIn: 0,

            totalOut: 0,

            netCashFlow: 0,

            dividendIncome: 0,

            feeExpense: 0,

            taxExpense: 0

        };

    }

}
