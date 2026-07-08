export class InvestmentDecisionEngine {

    evaluate(score: number): string {

        if (score >= 90) return "STRONG BUY";

        if (score >= 80) return "BUY";

        if (score >= 65) return "HOLD";

        if (score >= 50) return "REDUCE";

        return "SELL";

    }

}

