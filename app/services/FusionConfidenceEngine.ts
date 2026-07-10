export default class FusionConfidenceEngine {
    static calculate(scores: number[]) {
        if (!scores.length) return 0;

        const max = Math.max(...scores);
        const min = Math.min(...scores);

        const spread = max - min;

        const confidence = Math.max(
            0,
            100 - spread
        );

        return Number(confidence.toFixed(2));
    }
}
