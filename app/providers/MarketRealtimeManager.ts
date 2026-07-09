import RealtimeProvider from "../repositories/RealtimRepository";


class MarketRealtimeManager {
    private isRunning = false;

    start(callback: () => void) {
        if (this.isRunning) return;

        this.isRunning = true;
        RealtimeProvider.start(callback);
    }

    stop() {
        if (!this.isRunning) return;

        this.isRunning = false;
        RealtimeProvider.stop();
    }

    isStarted() {
        return this.isRunning;
    }
}

export default new MarketRealtimeManager();
