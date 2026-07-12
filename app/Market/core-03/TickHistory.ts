import Tick from "./Tick";

export default class TickHistory {
  private history: Tick[] = [];

  public add(tick: Tick): void {
    this.history.push(tick);
  }

  public latest(): Tick | undefined {
    return this.history.at(-1);
  }

  public all(): Tick[] {
    return [...this.history];
  }

  public clear(): void {
    this.history = [];
  }

  public size(): number {
    return this.history.length;
  }
}

