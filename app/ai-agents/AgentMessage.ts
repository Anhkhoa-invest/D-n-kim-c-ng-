export interface AgentMessage {
  from: string;
  to: string;
  type: string;
  payload: unknown;
  timestamp: Date;
}
