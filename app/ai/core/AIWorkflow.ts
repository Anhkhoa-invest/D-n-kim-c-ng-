export enum AIWorkflowStatus {
    Pending = "pending",
    Running = "running",
    Completed = "completed",
    Failed = "failed",
}

export interface AIWorkflow {
    id: string;
    name: string;
    status: AIWorkflowStatus;
    createdAt: Date;
    metadata?: Record<string, unknown>;
}

