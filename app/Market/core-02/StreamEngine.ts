export default class StreamEngine {
  private running = false;

  public start(): void {
    this.running = true;
  }

  public stop(): void {
    this.running = false;
  }

  public restart(): void {
    this.stop();
    this.start();
  }

  public isRunning(): boolean {
    return this.running;
  }

  public push(_data: unknown): void {
    // TODO: xử lý dữ liệu realtime
  }

  public clear(): void {
    // TODO: xóa buffer
  }
}
