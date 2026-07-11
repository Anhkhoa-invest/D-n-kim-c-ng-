import RealtimeQuoteEngine from "./RealtimeQuoteEngine";

export default class RealtimeScheduler {
  private static timer: NodeJS.Timeout | null = null;

  static start(symbols: string[], interval = 5000) {
    if (this.timer) return;

    this.timer = setInterval(async () => {
      for (const symbol of symbols) {
        try {
          await RealtimeQuoteEngine.getQuote(symbol);
        } catch (error) {
          console.error(`Realtime update failed: ${symbol}`, error);
        }
      }
    }, interval);
  }

  static stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  static isRunning() {
    return this.timer !== null;
  }
}
