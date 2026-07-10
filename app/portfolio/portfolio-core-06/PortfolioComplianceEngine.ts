import PortfolioCompliance from "./PortfolioCompliance";

export default class PortfolioComplianceEngine {

    static check(): PortfolioCompliance {

        return {

            compliant: true,

            violations: [],

            warnings: [],

            score: 100

        };

    }

}
