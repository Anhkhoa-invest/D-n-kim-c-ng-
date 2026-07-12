export default interface DataSource {
  connect(): Promise<void>;

  disconnect(): Promise<void>;

  isConnected(): boolean;

  fetchMarket(): Promise<any>;

  fetchTicker(symbol: string): Promise<any>;

  fetchIndexes(): Promise<any>;

  subscribe(symbol: string): void;

  unsubscribe(symbol: string): void;

  ping(): Promise<boolean>;

  getLatency(): number;
}
