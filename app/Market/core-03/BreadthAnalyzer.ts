export interface BreadthData {
  advancing: number;
  declining: number;
  unchanged: number;
}

export default class BreadthAnalyzer {
  public analyze(data: BreadthData) {
    const total =
      data.advancing + data.declining + data.unchanged;

    return {
      total,
      advanceRatio:
        total === 0 ? 0 : data.advancing / total,
      declineRatio:
        total === 0 ? 0 : data.declining / total,
      neutralRatio:
        total === 0 ? 0 : data.unchanged / total,
      bullish: data.advancing > data.declining,
    };
  }
}
