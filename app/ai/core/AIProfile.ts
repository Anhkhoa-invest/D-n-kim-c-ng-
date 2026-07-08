export enum AIProfileType {
  User = "user",
  System = "system",
}

export interface AIProfile {
  id: string;

  name: string;

  type: AIProfileType;

  description?: string;

  createdAt: Date;

  metadata?: Record<string, unknown>;
}

