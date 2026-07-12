export interface DecisionInput {
    market?: unknown;
    news?: unknown;
    portfolio?: unknown;
    financial?: unknown;
    memory?: unknown;
}

export interface DecisionResult {
    action: "BUY" | "SELL" | "HOLD";
    confidence: number;
    reason: string;
    data: unknown;
}

export class DecisionEngine {

    evaluate(data: DecisionInput): DecisionResult {

        const confidence = 0.8;

        return {
            action: confidence > 0.7 ? "BUY" : "HOLD",
            confidence,
            reason: "Combined analysis from AI Agents",
            data
        };
    }

}

