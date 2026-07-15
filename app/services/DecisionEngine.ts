import DecisionExplainService from "./DecisionExplainService";
import InvestmentThesisService from "./InvestmentThesisService";
export interface DecisionResult {
    action:
        | "STRONG_BUY"
        | "BUY"
        | "WATCH"
        | "REDUCE"
        | "SELL";

    confidence: number;

    reason: string;

    thesis: string;
}


export interface DecisionContext {
    score: number;
    roe: number;
    pe: number;
    debt: number;
    growth: number;
}
class DecisionEngine {

  decide(context: DecisionContext): DecisionResult {
const explanation = DecisionExplainService.explain(
    
    context.score,
    context.roe,
    context.pe,
    context.debt,
    context.growth
);
const thesis = InvestmentThesisService.generate(
    "MBB",
    context.score,
    context.roe,
    context.pe,
    context.debt,
    context.growth
);
if (
    context.score >= 85 &&
    context.roe >= 20 &&
    context.pe <= 15 &&
    context.debt <= 40 &&
    context.growth >= 20
) {
    return {
        action: "STRONG_BUY",
        confidence: 92,
        reason: explanation,
        thesis,
    };
}

if (
    context.score >= 80 &&
    context.roe >= 18 &&
    context.debt <= 50
) {
    return {
        action: "BUY",
        confidence: 82,
        reason: explanation,
        thesis,
    };
}

if (
    context.score >= 70 &&
    context.roe >= 15 &&
    context.debt <= 60
) {
    return {
        action: "WATCH",
        confidence: 70,
        reason: explanation,
        thesis,
    };
}

return {
    action: "SELL",
    confidence: 35,
    reason: explanation,
    thesis,
};
  }

}
export default new DecisionEngine();
