import AIAccuracyEngine from "./AIAccuracyEngine";
import AIWeightOptimizer from "./AIWeightOptimizer";

export default class AILearningOrchestrator {

    static run() {

        const accuracy = AIAccuracyEngine.getAccuracy();

        const weights = AIWeightOptimizer.optimize(
            accuracy.accuracy
        );

        return {
            accuracy,
            weights,
            updatedAt: new Date().toISOString(),
        };
    }

}
