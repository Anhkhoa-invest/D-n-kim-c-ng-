import { RealtimePriceService } from "./RealtimePriceService";
import WatchlistService from "./WatchlistService";
export class RealtimeEngine {
    private static timer: NodeJS.Timeout | null = null;
    
private static async update(callback: (data: unknown[]) => void) {
    const symbols = WatchlistService.getAll();

    const prices = await Promise.all(
        symbols.map((s: string) =>
            RealtimePriceService.getPrice(s)
        )
    );
    callback(prices);
}
 static start(callback: (data: unknown[]) => void) {
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


