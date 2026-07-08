export enum AIEnvironment {
  Development = "development",
  Production = "production",
}

export interface AIConfig {
  appName: string;

  version: string;

  environment: AIEnvironment;

  enableAI: boolean;

  enableLogging: boolean;

  metadata?: Record<string, unknown>;
}

