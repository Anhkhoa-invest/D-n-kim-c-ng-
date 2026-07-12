import Candle from "./Candle";

export default class CandleHistory {
  private candles: Candle[] = [];

  public add(candle: Candle): void {
    this.candles.push(candle);
  }

  public all(): Candle[] {
    return [...this.candles];
  }

  public latest(): Candle | undefined {
    return this.candles.at(-1);
  }

  public clear(): void {
    this.candles = [];
  }

  public size(): number {
    return this.candles.length;
  }
}
