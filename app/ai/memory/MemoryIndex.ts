
import { MemoryEntry } from "./MemoryEntry";

export class MemoryIndex {

    bySymbol(entries: MemoryEntry[]) {

        const map = new Map<string, MemoryEntry[]>();

        for (const entry of entries) {

            if (!map.has(entry.symbol)) {
                map.set(entry.symbol, []);
            }

            map.get(entry.symbol)!.push(entry);
        }

        return map;
    }

}
