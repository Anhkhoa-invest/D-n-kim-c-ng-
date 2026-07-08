export enum AIProviderType {
  OpenAI = "openai",
  Local = "local",
  Custom = "custom",
}

export interface AIProvider {
  id: string;

  name: string;

  type: AIProviderType;

  enabled: boolean;

  createdAt: Date;

  metadata?: Record<string, unknown>;
}
