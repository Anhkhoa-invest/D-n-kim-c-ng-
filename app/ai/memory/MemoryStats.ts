import { MemoryEntry } from "./MemoryEntry";

export class MemoryStats {

    total(entries: MemoryEntry[]) {
        return entries.length;
    }

    buyCount(entries: MemoryEntry[]) {
        return entries.filter(entry => entry.action === "BUY").length;
    }

    sellCount(entries: MemoryEntry[]) {
        return entries.filter(entry => entry.action === "SELL").length;
    }

    holdCount(entries: MemoryEntry[]) {
        return entries.filter(entry => entry.action === "HOLD").length;
    }

    averageScore(entries: MemoryEntry[]) {

        if (entries.length === 0) {
            return 0;
        }

        const total = entries.reduce(
            (sum, entry) => sum + entry.score,
            0
        );

        return total / entries.length;
    }

}
