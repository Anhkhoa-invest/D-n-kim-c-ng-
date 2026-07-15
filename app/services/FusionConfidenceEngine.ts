export interface ConfidenceResult {
    confidence: number;
    agreement: number;
    level: string;
}

export default class FusionConfidenceEngine {

    static calculate(scores: number[]): ConfidenceResult {

        if (scores.length === 0) {
            return {
                confidence: 0,
                agreement: 0,
                level: "UNKNOWN"
            };
        }

        const average =
            scores.reduce((a, b) => a + b, 0) / scores.length;

        const variance =
            scores.reduce(
                (sum, score) =>
                    sum + Math.pow(score - average, 2),
                0
            ) / scores.length;

        const agreement =
            Math.max(0, 100 - Math.sqrt(variance));

        let level = "LOW";

        if (agreement >= 90) level = "VERY HIGH";
        else if (agreement >= 80) level = "HIGH";
        else if (agreement >= 65) level = "MEDIUM";

        return {
            confidence: Math.round(average),
            agreement: Math.round(agreement),
            level
        };

    }

}

