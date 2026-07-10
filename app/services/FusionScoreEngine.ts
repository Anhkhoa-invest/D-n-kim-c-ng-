export default class FusionScoreEngine {
    static calculate(scores: number[]) {
        if (!scores.length) return 0;

        const total = scores.reduce((a, b) => a + b, 0);

        return Number((total / scores.length).toFixed(2));
    }
}
