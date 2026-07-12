export default class Ticks {
  constructor(
    public symbol: string,
    public price: number,
    public volume: number,
    public timestamp: Date = new Date()
  ) {}

  public clone(): Ticks {
    return new Ticks(
      this.symbol,
      this.price,
      this.volume,
      new Date(this.timestamp)
    );
  }
}
