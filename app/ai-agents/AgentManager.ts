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

try {
    return await agent.execute(input);
} finally {
    agent.stop();
}
  }
  agents() {
    return this.registry.list();
  }

}
