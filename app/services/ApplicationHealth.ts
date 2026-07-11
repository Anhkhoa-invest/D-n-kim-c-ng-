import ApplicationLifecycle from "./ApplicationLifecycle";

export default class ApplicationHealth {
  static check() {
    return {
      status: ApplicationLifecycle.isStarted()
        ? "RUNNING"
        : "STOPPED",
      uptime: Date.now(),
    };
  }
}
