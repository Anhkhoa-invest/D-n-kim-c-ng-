export enum AITaskStatus {
  Pending = "pending",
  Running = "running",
  Completed = "completed",
  Failed = "failed",
  Cancelled = "cancelled",
}

export enum AITaskPriority {
  Low = "low",
  Normal = "normal",
  High = "high",
  Critical = "critical",
}

export interface AITask {
  id: string;

  name: string;

  description?: string;

  status: AITaskStatus;

  priority: AITaskPriority;

  createdAt: Date;

  startedAt?: Date;

  finishedAt?: Date;

  retryCount: number;

  maxRetries: number;

  timeout?: number;

  completed: boolean;

  metadata?: Record<string, unknown>;
}
