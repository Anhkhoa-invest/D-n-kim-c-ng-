import PortfolioTransaction from "./PortfolioTransaction";

export default class PortfolioTransactionEngine {

    static create(): PortfolioTransaction {

        return {

            id: crypto.randomUUID(),

            symbol: "",

            side: "BUY",

            quantity: 0,

            price: 0,

            fee: 0,

            tax: 0,

            total: 0,

            executedAt: new Date()

        };

    }

}
