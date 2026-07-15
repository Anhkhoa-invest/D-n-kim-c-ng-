import FinancialAnalysisEngine from "./FinancialAnalysisEngine";

export interface FusionDecisionResult {
    score: number;
    recommendation: "STRONG BUY" | "BUY" | "HOLD" | "REDUCE" | "SELL";
    confidence: number;
    financial: any;
}

export default class FusionDecisionEngine {

    static async decide(
        symbol: string,
        marketScore: number,
        aiScore: number
    ): Promise<FusionDecisionResult> {

        // Financial Analysis
        const financial =
            await FinancialAnalysisEngine.analyze(symbol);

        // Final Score
        const finalScore = Number(
            (
                marketScore * 0.30 +
                financial.score * 0.40 +
                aiScore * 0.30
            ).toFixed(2)
        );

        let recommendation: FusionDecisionResult["recommendation"];

        if (finalScore >= 90) {
            recommendation = "STRONG BUY";
        } else if (finalScore >= 80) {
            recommendation = "BUY";
        } else if (finalScore >= 65) {
            recommendation = "HOLD";
        } else if (finalScore >= 50) {
            recommendation = "REDUCE";
        } else {
            recommendation = "SELL";
        }

        // Confidence
        const confidence = Math.min(
            100,
            Math.max(0, finalScore)
        );

        return {
            score: finalScore,
            recommendation,
            confidence,
            financial,
        };
    }

}
