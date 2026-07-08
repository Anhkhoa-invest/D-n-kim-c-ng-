import { AgentRegistry } from "./AgentRegistry";
import { BaseAgent } from "./BaseAgent";

export class AgentManager {
  constructor(
    private readonly registry = new AgentRegistry()
  ) {}

  register(agent: BaseAgent) {
    this.registry.register(agent);
  }

  async run(name: string, input: unknown) {
    const agent = this.registry.get(name);

    if (!agent) {
      throw new Error(`Agent ${name} not found`);
    }

    agent.start();

    const result = await agent.execute(input);

    agent.stop();

    return result;
  }

  agents() {
    return this.registry.list();
  }
}

