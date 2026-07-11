export interface AIAgentMessage {
  from: string;
  to: string;
  type: string;
  payload: any;
  timestamp: number;
}

