type EventHandler = (payload?: unknown) => void;

export default class RealtimeEventBus {
  private static listeners = new Map<string, Set<EventHandler>>();

  static subscribe(event: string, handler: EventHandler) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }

    this.listeners.get(event)!.add(handler);
  }

  static unsubscribe(event: string, handler: EventHandler) {
    this.listeners.get(event)?.delete(handler);
  }

  static emit(event: string, payload?: unknown) {
    this.listeners.get(event)?.forEach((handler) => {
      handler(payload);
    });
  }
}

