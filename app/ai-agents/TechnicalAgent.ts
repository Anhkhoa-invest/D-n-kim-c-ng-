import { BaseAgent } from "./BaseAgent";

export class TechnicalAgent extends BaseAgent {

    constructor() {
        super("TechnicalAgent");
    }

    async execute(input: unknown): Promise<unknown> {
        return {
            success: true,
            rsi: 58,
            macd: "BUY",
            trend: "UP",
        };
    }

}
