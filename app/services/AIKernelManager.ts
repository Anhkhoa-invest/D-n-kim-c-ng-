import AIKernel from "./AIKernel";

export default class AIKernelManager {
  static async start() {
    return AIKernel.start();
  }

  static async status() {
    return AIKernel.status();
  }

  static async restart() {
    return AIKernel.start();
  }
}
