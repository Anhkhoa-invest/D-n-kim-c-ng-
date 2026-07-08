import { IMarketDataProvider } from "./IMarketDataProvider";

export class ProviderRegistry {
    private static providers = new Map<string, IMarketDataProvider>();

    static register(name: string, provider: IMarketDataProvider) {
        this.providers.set(name, provider);
    }

    static get(name: string) {
        return this.providers.get(name);
    }

    static getAll() {
        return [...this.providers.values()];
    }

    static getNames() {
        return [...this.providers.keys()];
    }

    static has(name: string) {
        return this.providers.has(name);
    }

    static remove(name: string) {
        this.providers.delete(name);
    }

    static clear() {
        this.providers.clear();
    }
}

