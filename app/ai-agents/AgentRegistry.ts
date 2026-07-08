import { BaseAgent } from "./BaseAgent";

export class AgentRegistry {
  private readonly agents = new Map<string, BaseAgent>();

  register(agent: BaseAgent) {
    this.agents.set(agent.name, agent);
  }

  unregister(name: string) {
    this.agents.delete(name);
  }

  get(name: string) {
    return this.agents.get(name);
  }

  list() {
    return Array.from(this.agents.values());
  }
}
