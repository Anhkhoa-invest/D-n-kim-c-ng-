import MarketAgent from "./MarketAgent";
import InvestmentAgent from "./InvestmentAgent";
import RiskAgent from "./RiskAgent";
import PortfolioAgent from "./PortfolioAgent";
import AIReportGenerator from "./AIReportGenerator";

import AIWorkflowContext from "./AIWorkflowContext";

export default class AIWorkflowEngine {

    static async run() {

        const context: AIWorkflowContext = {};

        context.market =
            await new MarketAgent().execute(context);

        context.investment =
            await new InvestmentAgent().execute(context);

        context.risk =
            await new RiskAgent().execute(context);

        context.portfolio =
            await new PortfolioAgent().execute(context);

        const report = AIReportGenerator.generate();

        return {
            context,
            report,
        };
    }

    static async health() {
        return {
            running: true,
            timestamp: Date.now(),
        };
    }

}
