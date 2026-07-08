export enum AIMetricsType {
  Performance = "performance",
  Accuracy = "accuracy",
  Usage = "usage",
  System = "system",
}
export interface AIMetrics {
  id: string;

  type: AIMetricsType;

  name: string;

  value: number;

  createdAt: Date;

  metadata?: Record<string, unknown>;
}
