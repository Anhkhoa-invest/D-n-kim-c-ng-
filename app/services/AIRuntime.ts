
import AIOrchestrator from "./AIOrchestrator";
import KernelRuntime from "./KernelRuntime";

export default class AIRuntime {
  static async boot() {
    KernelRuntime.run();

    return {
      kernel: KernelRuntime.health(),
      ai: AIOrchestrator,
    };
  }
}
