import { MarketQuote } from "./MarketDataProvider";

export default class MarketCacheService {

    private static cache = new Map<string, MarketQuote>();

    static get(symbol: string) {
        return this.cache.get(symbol);
    }

    static set(symbol: string, quote: MarketQuote) {
        this.cache.set(symbol, quote);
    }

    static clear() {
        this.cache.clear();
    }

}
