import MarketEventBus from "../providers/MarketEventBus";

class RealtimeProvider {

  private interval: NodeJS.Timeout | null = null;

  public start(callback: () => void): void {

    this.stop();

    this.interval = setInterval(() => {
      callback();
      MarketEventBus.emit();
    }, 30000);

  }

  public stop(): void {

    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }

  }

  public isRunning(): boolean {
    return this.interval !== null;
  }

}

export default new RealtimeProvider();
