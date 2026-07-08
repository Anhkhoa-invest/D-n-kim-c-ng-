import { AIEvent } from "./AIEvent";

type Listener = (event: AIEvent) => void;

export class AIEventBus {
  private listeners: Listener[] = [];

  subscribe(listener: Listener) {
    this.listeners.push(listener);
  }

  publish(event: AIEvent) {
    for (const listener of this.listeners) {
      listener(event);
    }
  }
}
