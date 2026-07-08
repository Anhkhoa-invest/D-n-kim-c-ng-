import { MemoryEntry } from "./MemoryEntry";

export class MemoryStore {
    private memories: MemoryEntry[] = [];

    add(entry: MemoryEntry) {
        this.memories.push(entry);
    }

    all() {
        return [...this.memories];
    }

    clear() {
        this.memories = [];
    }

    count() {
        return this.memories.length;
    }
}
