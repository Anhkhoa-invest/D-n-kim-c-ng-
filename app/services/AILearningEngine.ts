import AIMemoryService from "./AIMemoryService";

export default class AILearningEngine {

    static learn() {

        const history = AIMemoryService.getAll();

        const total = history.length;

        const wins = history.filter(x => x.status === "WIN").length;

        const losses = history.filter(x => x.status === "LOSS").length;

        const pending = history.filter(x => x.status === "PENDING").length;

        return {
            total,
            wins,
            losses,
            pending,
            accuracy:
                total === 0
                    ? 0
                    : Number(((wins / total) * 100).toFixed(2))
        };

    }

}

