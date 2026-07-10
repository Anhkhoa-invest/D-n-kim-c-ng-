import PortfolioRisk from "./PortfolioRisk";

export default class PortfolioRiskEngine {

    static calculate(): PortfolioRisk {

        return {

            riskScore: 0,

            valueAtRisk: 0,

            expectedShortfall: 0,

            concentrationRisk: 0,

            sectorRisk: 0,

            liquidityRisk: 0

        };

    }

}
