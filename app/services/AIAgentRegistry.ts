import { AIAgent } from "./AIAgent";

export default class AIAgentRegistry {
  private static agents = new Map<string, AIAgent>();

  static register(agent: AIAgent) {
    this.agents.set(agent.id, agent);
  }

  static get(id: string) {
    return this.agents.get(id);
  }

  static all() {
    return [...this.agents.values()];
  }

  static clear() {
    this.agents.clear();
  }
}

