import { Event } from "./Event";

export type EventHandler = (event: Event) => void;

export class EventBus {
  private readonly handlers = new Map<string, EventHandler[]>();

  subscribe(type: string, handler: EventHandler): void {
    const list = this.handlers.get(type) ?? [];
    list.push(handler);
    this.handlers.set(type, list);
  }

  publish(event: Event): void {
    const list = this.handlers.get(event.type);

    if (!list) return;

    list.forEach(handler => handler(event));
  }

  clear(): void {
    this.handlers.clear();
  }
}

