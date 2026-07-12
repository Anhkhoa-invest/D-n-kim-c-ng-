export default class RealtimePrice {
  constructor(
    public symbol: string,
    public price: number,
    public volume: number,
    public updatedAt: Date = new Date()
  ) {}

  public update(price: number, volume: number): void {
    this.price = price;
    this.volume = volume;
    this.updatedAt = new Date();
  }
}

