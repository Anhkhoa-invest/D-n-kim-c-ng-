import PortfolioOrder from "./PortfolioOrder";

export default class PortfolioOrderEngine {

    static create(): PortfolioOrder {

        return {

            id: crypto.randomUUID(),

            symbol: "",

            side: "BUY",

            quantity: 0,

            price: 0,

            status: "PENDING",

            createdAt: new Date()

        };

    }

}
