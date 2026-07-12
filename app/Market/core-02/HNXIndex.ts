export default class HNXIndex {
  constructor(
    public value: number = 0,
    public change: number = 0,
    public percentChange: number = 0,
    public volume: number = 0,
    public updatedAt: Date = new Date()
  ) {}

  public clone(): HNXIndex {
    return new HNXIndex(
      this.value,
      this.change,
      this.percentChange,
      this.volume,
      new Date(this.updatedAt)
    );
  }
}
