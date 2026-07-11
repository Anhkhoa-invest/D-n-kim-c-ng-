import AIAgentRegistry from "./AIAgentRegistry";
import { AIAgent } from "./AIAgent";

export default class AIAgentLoader {
  static load(agents: AIAgent[]) {
    for (const agent of agents) {
      AIAgentRegistry.register(agent);
    }

    return AIAgentRegistry.all();
  }
}
