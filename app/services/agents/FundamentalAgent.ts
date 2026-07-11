import BaseAgent from "./BaseAgent";

export default class FundamentalAgent extends BaseAgent {

    readonly name = "FundamentalAgent";

    async analyze(symbol: string) {

        // TODO:
        // Sau này đọc dữ liệu:
        // - ROE
        // - ROA
        // - EPS
        // - P/E
        // - P/B
        // - Debt
        // - Growth

        return this.success(
            92,
            95,
            `Fundamental analysis completed for ${symbol}`,
            {
                roe: 24.8,
                pe: 11.5,
                pb: 1.8,
            }
        );

    }

}

