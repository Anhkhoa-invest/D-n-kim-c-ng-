import type { MarketData } from "@/app/models/MarketData";

export default class CacheManager {
    private cache = new Map<string, MarketData>();

    public set(key: string, value: MarketData): void {
        this.cache.set(key, value);
    }

    public get(key: string): MarketData | undefined {
        return this.cache.get(key);
    }

    public has(key: string): boolean {
        return this.cache.has(key);
    }

    public remove(key: string): void {
        this.cache.delete(key);
    }

    public clear(): void {
        this.cache.clear();
    }

    public size(): number {
        return this.cache.size;
    }
}
