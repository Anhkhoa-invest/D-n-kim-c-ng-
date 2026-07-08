export enum AIQueueStatus {
    Waiting = "waiting",
    Processing = "processing",
    Completed = "completed",
    Failed = "failed",
}

export interface AIQueue {
    id: string;

    name: string;

    status: AIQueueStatus;

    createdAt: Date;

    metadata?: Record<string, unknown>;
}

