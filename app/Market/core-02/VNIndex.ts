export default class VNIndex {
  constructor(
    public value: number = 0,
    public change: number = 0,
    public percentChange: number = 0,
    public volume: number = 0,
    public updatedAt: Date = new Date()
  ) {}

  public clone(): VNIndex {
    return new VNIndex(
      this.value,
      this.change,
      this.percentChange,
      this.volume,
      new Date(this.updatedAt)
    );
  }
}
