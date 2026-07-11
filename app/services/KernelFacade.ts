import KernelManager from "./KernelManager";

export default class KernelFacade {
  static boot() {
    return KernelManager.start();
  }

  static status() {
    return KernelManager.health();
  }

  static restart() {
    return KernelManager.restart();
  }
}
