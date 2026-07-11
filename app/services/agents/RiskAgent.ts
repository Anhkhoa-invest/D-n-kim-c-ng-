import BaseAgent from "./BaseAgent";

export default class RiskAgent extends BaseAgent {

    readonly name = "RiskAgent";

    async analyze(symbol: string) {

        // TODO
        // Volatility
        // Beta
        // Drawdown
        // Liquidity
        // Bankruptcy Risk

        return this.success(
            86,
            90,
            `Risk analysis completed for ${symbol}`,
            {
                beta: 0.82,
                volatility: "Low",
                bankruptcyRisk: "Very Low",
                liquidity: "High",
            }
        );

    }

}
