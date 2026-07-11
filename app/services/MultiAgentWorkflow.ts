import AIAgentCoordinator from "./AIAgentCoordinator";

export default class MultiAgentWorkflow {
  static async execute() {
    await AIAgentCoordinator.start();

    return {
      status: "RUNNING",
      agents: await AIAgentCoordinator.health(),
    };
  }
}
