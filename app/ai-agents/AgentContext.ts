export interface AgentContext {
  userId?: string;
  sessionId?: string;

  input?: unknown;
  output?: unknown;

  metadata?: Record<string, unknown>;

  createdAt: Date;
}
