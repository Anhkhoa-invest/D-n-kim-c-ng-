import AILearningEngine from "./AILearningEngine";

export default class AIAccuracyEngine {

    static getAccuracy() {

        const result = AILearningEngine.learn();

        return {
            accuracy: result.accuracy,
            total: result.total,
            wins: result.wins,
            losses: result.losses,
            pending: result.pending,
        };

    }

}
