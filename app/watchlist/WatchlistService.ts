import type { WatchlistItem } from "./WatchlistItem";
import WatchlistRepository from "./WatchlistRepository";

export default class WatchlistService {

    static getAll() {
        return WatchlistRepository.load();
    }

    static add(item: WatchlistItem) {
        WatchlistRepository.add(item);
    }

    static remove(symbol: string) {
        WatchlistRepository.remove(symbol);
    }

    static find(symbol: string) {
        return WatchlistRepository.find(symbol);
    }

    static clear() {
        WatchlistRepository.clear();
    }

}
