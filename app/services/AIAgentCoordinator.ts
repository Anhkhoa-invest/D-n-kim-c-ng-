import AIAgentManager from "./AIAgentManager";

export default class AIAgentCoordinator {
  static async start() {
    await AIAgentManager.startAll();
  }

  static async stop() {
    await AIAgentManager.stopAll();
  }

  static async health() {
    return AIAgentManager.health();
  }
}
