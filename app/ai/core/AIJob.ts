export enum AIJobStatus {
    Pending = "pending",
    Running = "running",
    Completed = "completed",
    Failed = "failed",
}

export interface AIJob {
    id: string;
    name: string;
    status: AIJobStatus;
    createdAt: Date;
    metadata?: Record<string, unknown>;
}
