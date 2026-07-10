import type { WatchlistItem } from "./WatchlistItem";

export default class WatchlistRepository {

    private static items: WatchlistItem[] = [];

    static load() {
        return this.items;
    }

    static save(items: WatchlistItem[]) {
        this.items = items;
    }

    static add(item: WatchlistItem) {
        this.items.push(item);
    }

    static remove(symbol: string) {
        this.items = this.items.filter(
            i => i.symbol !== symbol
        );
    }

    static find(symbol: string) {
        return this.items.find(
            i => i.symbol === symbol
        );
    }

    static clear() {
        this.items = [];
    }

}

