export default class PollingEngine {
    private timer?: NodeJS.Timeout;

    public start(interval = 1000): void {}

    public stop(): void {}

    public isRunning(): boolean {
        return this.timer !== undefined;
    }
}
