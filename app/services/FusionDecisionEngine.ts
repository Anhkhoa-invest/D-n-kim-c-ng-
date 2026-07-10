export default class FusionDecisionEngine {
    static decide(score: number) {
        if (score >= 90) {
            return "STRONG BUY";
        }

        if (score >= 80) {
            return "BUY";
        }

        if (score >= 65) {
            return "HOLD";
        }

        if (score >= 50) {
            return "REDUCE";
        }

        return "SELL";
    }
}
