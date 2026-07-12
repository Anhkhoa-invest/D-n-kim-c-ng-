export default class IndustryIndex {
  constructor(
    public name: string,
    public value: number = 0,
    public change: number = 0,
    public percentChange: number = 0,
    public updatedAt: Date = new Date()
  ) {}

  public clone(): IndustryIndex {
    return new IndustryIndex(
      this.name,
      this.value,
      this.change,
      this.percentChange,
      new Date(this.updatedAt)
    );
  }
}
