export enum AIWorkerStatus {
    Idle = "idle",
    Busy = "busy",
    Offline = "offline",
}

export interface AIWorker {
    id: string;

    name: string;

    status: AIWorkerStatus;

    createdAt: Date;

    metadata?: Record<string, unknown>;
}
