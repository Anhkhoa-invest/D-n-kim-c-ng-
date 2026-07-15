import { RealtimePriceService } from "./RealtimePriceService";

import WatchlistService from "./WatchlistService";
import RealtimeEventBus from "./RealtimeEventBus";

export default class RealtimeMarketService {
  private static timer: NodeJS.Timeout | null = null;

  static start() {
    if (this.timer) return;

    const update = async () => {
      const symbols = WatchlistService.getAll();

      const quotes = await Promise.all(
        symbols.map((code) =>
          RealtimePriceService.getPrice(code)
        )
      );

      RealtimeEventBus.emit(
        "DASHBOARD_UPDATED",
        quotes
      );
    };

    update();

    this.timer = setInterval(update, 5000);
  }

  static stop() {
    if (!this.timer) return;

    clearInterval(this.timer);

    this.timer = null;
  }
}

