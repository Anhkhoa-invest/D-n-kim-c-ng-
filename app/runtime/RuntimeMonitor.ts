import { RuntimeState } from "./RuntimeState";

export class RuntimeMonitor {

    constructor(
        private readonly state: RuntimeState
    ) {}

    health() {
        return {
            status: this.state.getStatus(),
            running: this.state.isRunning(),
            stopped: this.state.isStopped(),
            error: this.state.isError(),
            timestamp: new Date()
        };
    }

    print() {
        console.table(this.health());
    }
}
