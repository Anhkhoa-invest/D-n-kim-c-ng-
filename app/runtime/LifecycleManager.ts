import { RuntimeState, RuntimeStatus } from "./RuntimeState";

export class LifecycleManager {

    constructor(
        private readonly state: RuntimeState
    ) {}

    start() {
        this.state.setStatus(RuntimeStatus.STARTING);
        this.state.setStatus(RuntimeStatus.RUNNING);
    }

    pause() {
        this.state.setStatus(RuntimeStatus.PAUSED);
    }

    resume() {
        this.state.setStatus(RuntimeStatus.RUNNING);
    }

    stop() {
        this.state.setStatus(RuntimeStatus.STOPPING);
        this.state.setStatus(RuntimeStatus.STOPPED);
    }

    error() {
        this.state.setStatus(RuntimeStatus.ERROR);
    }

    restart() {
        this.stop();
        this.start();
    }
}
