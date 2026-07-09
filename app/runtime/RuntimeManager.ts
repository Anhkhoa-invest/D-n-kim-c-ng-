import { AppKernel } from "../kernel/AppKernel";
import { LifecycleManager } from "./LifecycleManager";
import { RuntimeMonitor } from "./RuntimeMonitor";
import { RuntimeScheduler } from "./RuntimeScheduler";
import { RuntimeState } from "./RuntimeState";
export class RuntimeManager {
    readonly state = new RuntimeState();
    readonly lifecycle =
        new LifecycleManager(this.state);
    readonly scheduler =
        new RuntimeScheduler();
    readonly monitor =
        new RuntimeMonitor(this.state);
    constructor(
        private readonly kernel: AppKernel
    ) {}
start() {
        this.lifecycle.start();
        this.kernel.boot();

        this.scheduler.start();
    }
stop() {
        this.scheduler.stop();

        this.kernel.shutdown();

        this.lifecycle.stop();
    }

restart() {
        this.stop();

        this.start();
    }

health() {

        return this.monitor.health();

    }
print() {

        this.monitor.print();

    }

}