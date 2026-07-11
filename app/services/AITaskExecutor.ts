import AITaskScheduler from "./AITaskScheduler";

export default class AITaskExecutor {

    static async execute() {
        const task = AITaskScheduler.next();

        if (!task) return null;

        return {
            success: true,
            task,
            executedAt: Date.now(),
        };
    }

    static async executeAll() {
        const results = [];

        while (AITaskScheduler.pending() > 0) {
            results.push(await this.execute());
        }

        return results;
    }
}
