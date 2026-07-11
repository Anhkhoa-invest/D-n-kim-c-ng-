import RealtimeEventBus from "./RealtimeEventBus";

interface AIHistoryItem {
  symbol: string;
  score: number;
  recommendation: string;
  explanation: string;
  time: string;
}

export default class AIHistoryService {
  private static history: AIHistoryItem[] = [];

  static init() {
    RealtimeEventBus.subscribe(
      "AI_REPORT_UPDATED",
      this.handleReport
    );
  }


  private static handleReport = (payload: any) => {
    this.history.unshift({
      symbol: payload.symbol,
      score: payload.score,
      recommendation: payload.recommendation,
      explanation: payload.explanation,
      time: new Date().toISOString(),
    });
    RealtimeEventBus.emit(
    "AI_HISTORY_UPDATED",
    {
        history: this.history,
    }
);


    if (this.history.length > 1000) {
      this.history.pop();
    }
  };

  static getHistory() {
    return this.history;
  }
}
