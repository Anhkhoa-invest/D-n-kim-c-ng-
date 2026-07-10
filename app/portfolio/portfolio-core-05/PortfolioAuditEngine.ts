import PortfolioAudit from "./PortfolioAudit";

export default class PortfolioAuditEngine {

    static create(): PortfolioAudit {

        return {

            id: crypto.randomUUID(),

            createdAt: new Date(),

            action: "",

            user: "",

            description: ""

        };

    }

}
