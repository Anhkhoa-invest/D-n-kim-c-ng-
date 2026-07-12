export interface Quote {
  symbol: string;
  price: number;
  change: number;
  percentChange: number;
  volume: number;
  timestamp: Date;
}

export default class QuoteHistory {
  private history: Quote[] = [];

  public add(quote: Quote): void {
    this.history.push(quote);
  }

  public all(): Quote[] {
    return [...this.history];
  }

  public latest(): Quote | undefined {
    return this.history.at(-1);
  }

  public clear(): void {
    this.history = [];
  }

  public size(): number {
    return this.history.length;
  }
}
