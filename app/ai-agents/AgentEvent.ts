export interface AgentEvent {
  name: string;
  source: string;
  data: unknown;
  createdAt: Date;
}