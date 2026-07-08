export enum AIHistoryType {
  Session = "session",
  Job = "job",
  Task = "task",
  Decision = "decision",
}
export interface AIHistory {
  id: string;
  type: AIHistoryType;
  title: string;
  createdAt: Date;
  metadata?: Record<string, unknown>;
}