import AIAgentRegistry from "./AIAgentRegistry";
import { AIAgent } from "./AIAgent";

export default class AIAgentManager {

    static all(): AIAgent[] {
        return AIAgentRegistry.all();
    }

    static get(id: string) {
        return AIAgentRegistry.get(id);
    }

    static async health() {
        const agents = this.all();

        return Promise.all(
            agents.map(agent => agent.health())
        );
    }

    static async startAll() {
        const agents = this.all();

        for (const agent of agents) {
            await agent.start();
        }
    }

    static async stopAll() {
        const agents = this.all();

        for (const agent of agents) {
            await agent.stop();
        }
    }
}
