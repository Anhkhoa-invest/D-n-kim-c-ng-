type EventHandler = (payload?: any) => void;

export default class EventDispatcher {
  private events = new Map<string, Set<EventHandler>>();

  public on(event: string, handler: EventHandler): void {
    if (!this.events.has(event)) {
      this.events.set(event, new Set());
    }

    this.events.get(event)!.add(handler);
  }

  public off(event: string, handler: EventHandler): void {
    this.events.get(event)?.delete(handler);
  }

  public emit(event: string, payload?: any): void {
    this.events.get(event)?.forEach((handler) => {
      handler(payload);
    });
  }

  public clear(event?: string): void {
    if (event) {
      this.events.delete(event);
    } else {
      this.events.clear();
    }
  }

  public has(event: string): boolean {
    return this.events.has(event);
  }

  public listenerCount(event: string): number {
    return this.events.get(event)?.size ?? 0;
  }
}
