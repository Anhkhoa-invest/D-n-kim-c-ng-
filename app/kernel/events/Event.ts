export interface Event {
  type: string;
  timestamp: number;
  payload?: unknown;
}
