import PortfolioAlert from "./PortfolioAlert";

export default class PortfolioAlertEngine {

    static create(): PortfolioAlert {

        return {

            id: crypto.randomUUID(),

            type: "INFO",

            message: "",

            level: "INFO",

            createdAt: new Date(),

            read: false

        };

    }

}

