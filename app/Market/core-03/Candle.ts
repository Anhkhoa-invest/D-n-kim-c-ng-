export default class Candle {
  constructor(
    public open: number,
    public high: number,
    public low: number,
    public close: number,
    public volume: number,
    public time: Date = new Date()
  ) {}

  public bullish(): boolean {
    return this.close > this.open;
  }

  public bearish(): boolean {
    return this.close < this.open;
  }

  public clone(): Candle {
    return new Candle(
      this.open,
      this.high,
      this.low,
      this.close,
      this.volume,
      new Date(this.time)
    );
  }
}

