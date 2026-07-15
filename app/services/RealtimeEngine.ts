import { RealtimePriceService, PriceData } from "./RealtimePriceService";
import WatchlistService from "./WatchlistService";

export class RealtimeEngine {
  private static timer: NodeJS.Timeout | null = null;

  private static async update(
    callback: (data: PriceData[]) => void
  ) {
    const symbols = WatchlistService.getAll();

    const prices = await Promise.all(
      symbols.map((symbol: string) =>
        RealtimePriceService.getPrice(symbol)
      )
    );

    callback(prices);
  }

  static start(
    callback: (data: PriceData[]) => void
  ) {
    if (this.timer) return;

    this.update(callback);

    this.timer = setInterval(() => {
      this.update(callback);
    }, 5000);
  }

  static stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}
