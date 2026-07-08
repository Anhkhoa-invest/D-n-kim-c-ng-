export enum AISecurityLevel {
  Low = "low",
  Medium = "medium",
  High = "high",
  Critical = "critical",
}

export interface AISecurity {
  id: string;

  level: AISecurityLevel;

  enabled: boolean;

  createdAt: Date;

  metadata?: Record<string, unknown>;
}
