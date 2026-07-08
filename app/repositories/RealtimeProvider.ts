import MarketEventBus from "../providers/MarketEventBus";
class RealtimeProvider {
  private interval: NodeJS.Timeout | null = null;

  start(callback: () => void) {
    this.stop();

   this.interval = setInterval(() => {
    callback();
    MarketEventBus.emit();
}, 30000);

  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}

export default new RealtimeProvider();

