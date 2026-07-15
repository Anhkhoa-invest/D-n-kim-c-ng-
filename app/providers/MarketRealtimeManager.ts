import MarketDataGateway from "./MarketDataGateway";

class MarketRealtimeManager {
    private isRunning = false;
    private timer: NodeJS.Timeout | null = null;

    start(callback: () => void) {
        if (this.isRunning) return;

        this.isRunning = true;

        this.timer = setInterval(() => {
            callback();
        }, 5000);
    }

    stop() {
        if (!this.isRunning) return;

        this.isRunning = false;

        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    isStarted() {
        return this.isRunning;
    }
}

export default new MarketRealtimeManager();
