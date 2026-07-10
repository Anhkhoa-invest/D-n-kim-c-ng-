import PortfolioReport from "./PortfolioReport";

export default class PortfolioReportEngine {

    static generate(): PortfolioReport {

        return {

            generatedAt: new Date(),

            summary: "",

            score: 0,

            recommendation: "",

            risks: [],

            opportunities: []

        };

    }

}

