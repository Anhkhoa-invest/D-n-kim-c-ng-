export default class AIWeightOptimizer {

    private static weights = {
        fundamental: 0.40,
        technical: 0.25,
        news: 0.15,
        sentiment: 0.10,
        valuation: 0.10,
    };

    static getWeights() {
        return this.weights;
    }

    static optimize(accuracy: number) {

        if (accuracy >= 80) return this.weights;

        this.weights.technical += 0.02;
        this.weights.news += 0.01;
        this.weights.sentiment += 0.01;

        this.weights.fundamental -= 0.02;
        this.weights.valuation -= 0.02;

        return this.weights;
    }

}
