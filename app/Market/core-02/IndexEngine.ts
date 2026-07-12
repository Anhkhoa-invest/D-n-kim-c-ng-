import IndexCalculator from "./IndexCalculator";
import IndexHistory from "./IndexHistory";
import IndexStatistics from "./IndexStatistics";
import EventDispatcher from "./EventDispatcher";

export default class IndexEngine {
  private calculator = new IndexCalculator();
  private history = new IndexHistory();
  private statistics = new IndexStatistics();
  private dispatcher = new EventDispatcher();

  public update(value: number): void {
    this.history.add(value);

    this.dispatcher.emit("index:update", value);
  }

  public getCalculator(): IndexCalculator {
    return this.calculator;
  }

  public getHistory(): IndexHistory {
    return this.history;
  }

  public getStatistics(): IndexStatistics {
    return this.statistics;
  }

  public getDispatcher(): EventDispatcher {
    return this.dispatcher;
  }

  public reset(): void {
    this.history.clear();
  }
}
