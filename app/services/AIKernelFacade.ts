import AIKernelManager from "./AIKernelManager";

export default class AIKernelFacade {
  static async boot() {
    return AIKernelManager.start();
  }

  static async health() {
    return AIKernelManager.status();
  }
}

