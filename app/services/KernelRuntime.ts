import KernelFacade from "./KernelFacade";

export default class KernelRuntime {
  static run() {
    return KernelFacade.boot();
  }

  static health() {
    return KernelFacade.status();
  }
}
