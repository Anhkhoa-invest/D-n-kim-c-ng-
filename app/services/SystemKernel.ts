import ApplicationBootstrap from "./ApplicationBootstrap";
import ApplicationHealth from "./ApplicationHealth";

export default class SystemKernel {
  static boot() {
    ApplicationBootstrap.boot();
    return ApplicationHealth.check();
  }

  static health() {
    return ApplicationHealth.check();
  }
}

