type Job = {
    name: string;
    interval: number;
    action: () => void;
    timer?: NodeJS.Timeout;
};

export class RuntimeScheduler {

    private readonly jobs = new Map<string, Job>();

    register(
        name: string,
        interval: number,
        action: () => void
    ) {
        this.jobs.set(name, {
            name,
            interval,
            action
        });
    }

    start() {
        for (const job of this.jobs.values()) {
            job.timer = setInterval(() => {
                job.action();
            }, job.interval);
        }
    }

    stop() {
        for (const job of this.jobs.values()) {
            if (job.timer) {
                clearInterval(job.timer);
            }
        }
    }

    remove(name: string) {
        const job = this.jobs.get(name);

        if (!job) return;

        if (job.timer) {
            clearInterval(job.timer);
        }

        this.jobs.delete(name);
    }

    clear() {
        this.stop();
        this.jobs.clear();
    }

    list(): string[] {
        return [...this.jobs.keys()];
    }
}
