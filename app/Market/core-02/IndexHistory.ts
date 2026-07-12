export default class IndexHistory {
  private history: number[] = [];

  public add(value: number): void {
    this.history.push(value);
  }

  public all(): number[] {
    return [...this.history];
  }

  public latest(): number | undefined {
    return this.history.at(-1);
  }

  public clear(): void {
    this.history = [];
  }
}

