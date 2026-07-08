import type { WatchlistItem } from "./WatchlistItem";

export default class WatchlistService {

    private static items: WatchlistItem[] = [];

    static getAll() {
        return this.items;
    }

    static add(item: WatchlistItem) {
        this.items.push(item);
    }

    static remove(symbol: string) {
        this.items =
            this.items.filter(
                i => i.symbol !== symbol
            );
    }

}
