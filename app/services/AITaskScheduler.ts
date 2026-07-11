import AITaskQueue from "./AITaskQueue";

export default class AITaskScheduler {

    static schedule(task: any) {
        AITaskQueue.push(task);
    }

    static next() {
        return AITaskQueue.pop();
    }

    static pending() {
        return AITaskQueue.size();
    }

    static clear() {
        AITaskQueue.clear();
    }
}
