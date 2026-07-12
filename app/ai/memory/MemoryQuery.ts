import { MemoryEntry } from "./MemoryEntry";

export class MemoryQuery {

    byId(entries: MemoryEntry[], id: string) {
        return entries.find(entry => entry.id === id);
    }

    bySymbol(entries: MemoryEntry[], symbol: string) {
        return entries.filter(entry => entry.symbol === symbol);
    }

    latest(entries: MemoryEntry[], limit = 10) {
        return [...entries]
            .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
            .slice(0, limit);
    }

    search(
        entries: MemoryEntry[],
        predicate: (entry: MemoryEntry) => boolean
    ) {
        return entries.filter(predicate);
    }

}

