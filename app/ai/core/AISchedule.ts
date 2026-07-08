export enum AISchedulerStatus {
    Running = "running",
    Stopped = "stopped",
    Paused = "paused",
}

export interface AIScheduler {
    id: string;

    name: string;

    status: AISchedulerStatus;

    createdAt: Date;

    metadata?: Record<string, unknown>;
}


