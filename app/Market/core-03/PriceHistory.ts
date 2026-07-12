import OHLC from "./OHLC";

export default class PriceHistory {
  private history: OHLC[] = [];

  public add(candle: OHLC): void {
    this.history.push(candle);
  }

  public all(): OHLC[] {
    return [...this.history];
  }

  public latest(): OHLC | undefined {
    return this.history.at(-1);
  }

  public clear(): void {
    this.history = [];
  }

  public size(): number {
    return this.history.length;
  }
}

