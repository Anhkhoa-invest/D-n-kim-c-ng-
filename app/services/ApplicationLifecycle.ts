export default class ApplicationLifecycle {
  private static started = false;

  static start() {
    if (this.started) return;

    this.started = true;

    console.log("💎 Kim Cương OS Started");
  }

  static stop() {
    this.started = false;

    console.log("🛑 Kim Cương OS Stopped");
  }

  static restart() {
    this.stop();
    this.start();
  }

  static isStarted() {
    return this.started;
  }
}
