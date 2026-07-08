export interface DecisionResult {
    action: "BUY" | "SELL" | "HOLD";
    confidence: number;
    reason: string;
    data: unknown;
}

export class DecisionEngine {

    evaluate(data: any): DecisionResult {

        const confidence = 0.8;

        return {
            action: confidence > 0.7 ? "BUY" : "HOLD",
            confidence,
            reason: "Combined analysis from AI Agents",
            data
        };
    }

}

