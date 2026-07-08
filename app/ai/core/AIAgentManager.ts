import { AIAgent } from "./AIAgent";

export class AIAgentManager {
  private agents = new Map<string, AIAgent>();

  register(agent: AIAgent) {
    this.agents.set(agent.id, agent);
  }

  get(id: string): AIAgent | undefined {
    return this.agents.get(id);
  }

  getAll(): AIAgent[] {
    return Array.from(this.agents.values());
  }

  remove(id: string) {
    this.agents.delete(id);
  }

  clear() {
    this.agents.clear();
  }
}

