export enum AgentStatus {
  IDLE = "IDLE",
  RUNNING = "RUNNING",
  STOPPED = "STOPPED",
  ERROR = "ERROR",
}

export class AgentLifecycle {
  private status = AgentStatus.IDLE;

  start() {
    this.status = AgentStatus.RUNNING;
  }

  stop() {
    this.status = AgentStatus.STOPPED;
  }

  error() {
    this.status = AgentStatus.ERROR;
  }

  getStatus() {
    return this.status;
  }
}
