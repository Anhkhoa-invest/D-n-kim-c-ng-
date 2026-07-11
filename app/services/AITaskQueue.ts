import { AITask } from "./AITask";

export default class AITaskQueue {
  private static queue: AITask[] = [];

  static push(task: AITask) {
    this.queue.push(task);
    this.queue.sort((a, b) => b.priority - a.priority);
  }

  static pop() {
    return this.queue.shift();
  }

  static size() {
    return this.queue.length;
  }

  static clear() {
    this.queue = [];
  }
}


