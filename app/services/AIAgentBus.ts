import { AIAgentMessage } from "./AIAgentMessage";

export default class AIAgentBus {
  private static queue: AIAgentMessage[] = [];

  static send(message: AIAgentMessage) {
    this.queue.push(message);
  }

  static receive() {
    return this.queue.shift();
  }

  static pending() {
    return this.queue.length;
  }

  static clear() {
    this.queue = [];
  }
}

