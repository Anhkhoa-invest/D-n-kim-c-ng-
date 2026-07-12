export default class TrendAnalyzer {
  public analyze(current: number, previous: number) {
    const change = current - previous;

    return {
      change,
      trend:
        change > 0
          ? "UP"
          : change < 0
          ? "DOWN"
          : "SIDEWAY",
    };
  }
}
