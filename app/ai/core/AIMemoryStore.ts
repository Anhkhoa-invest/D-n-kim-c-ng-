import { AIMemory } from "./AIMemory";

export class AIMemoryStore {
  private memories = new Map<string, unknown>();

  save(memory: AIMemory) {
    this.memories.set(memory.key, memory.value);
  }

  load(key: string): unknown {
    return this.memories.get(key);
  }

  clear() {
    this.memories.clear();
  }
}
