export enum AIStateStatus {
    Idle = "idle",
    Running = "running",
    Busy = "busy",
    Error = "error",
}

export interface AIState {
    id: string;
    status: AIStateStatus;
    updatedAt: Date;
    metadata?: Record<string, unknown>;
}
