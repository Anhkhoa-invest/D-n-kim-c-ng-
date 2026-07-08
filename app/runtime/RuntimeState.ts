export enum RuntimeStatus {
    STOPPED = "STOPPED",
    STARTING = "STARTING",
    RUNNING = "RUNNING",
    PAUSED = "PAUSED",
    STOPPING = "STOPPING",
    ERROR = "ERROR"
}

export class RuntimeState {
    private status: RuntimeStatus = RuntimeStatus.STOPPED;

    getStatus(): RuntimeStatus {
        return this.status;
    }

    setStatus(status: RuntimeStatus) {
        this.status = status;
    }

    isRunning(): boolean {
        return this.status === RuntimeStatus.RUNNING;
    }

    isStopped(): boolean {
        return this.status === RuntimeStatus.STOPPED;
    }

    isError(): boolean {
        return this.status === RuntimeStatus.ERROR;
    }
}
