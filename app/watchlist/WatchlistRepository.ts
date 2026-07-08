import type { WatchlistItem } from "./WatchlistItem";

export default class WatchlistRepository {

    private static items: WatchlistItem[] = [];

    static save(items: WatchlistItem[]) {
        this.items = items;
    }

    static load() {
        return this.items;
    }

}
