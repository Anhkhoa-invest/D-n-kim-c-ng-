import { BaseAgent } from "./BaseAgent";
export class FundamentalAgent extends BaseAgent {
    constructor() {
        super("FundamentalAgent");
    }

    async execute(input: unknown): Promise<unknown> {
        return {
            success: true,
            intrinsicValue: 52000,
            marginOfSafety: 18,
        };
    }
}
