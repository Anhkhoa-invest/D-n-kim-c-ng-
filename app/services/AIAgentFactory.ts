import { AIAgent } from "./AIAgent";

export default class AIAgentFactory {
  static create(agent: AIAgent) {
    return agent;
  }

  static createMany(agents: AIAgent[]) {
    return agents.map(this.create);
  }
}

