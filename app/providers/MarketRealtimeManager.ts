import RealtimeProvider from "../repositories/RealtimeProvider";

class MarketRealtimeManager {
  start(callback: () => void) {
    RealtimeProvider.start(callback);
  }

  stop() {
    RealtimeProvider.stop();
  }
}

export default new MarketRealtimeManager();
