import SystemKernel from "./SystemKernel";

export default class KernelManager {
  static start() {
    return SystemKernel.boot();
  }

  static health() {
    return SystemKernel.health();
  }

  static restart() {
    return SystemKernel.boot();
  }
}


