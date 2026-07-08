import { AICache } from "./AICache";

export class AICacheStore {
  private cache = new Map<string, AICache>();

  set(item: AICache) {
    this.cache.set(item.key, item);
  }

  get(key: string): unknown {
    const item = this.cache.get(key);

    if (!item) {
      return undefined;
    }

    if (item.expiresAt && item.expiresAt < new Date()) {
      this.cache.delete(key);
      return undefined;
    }

    return item.value;
  }

  clear() {
    this.cache.clear();
  }
}
