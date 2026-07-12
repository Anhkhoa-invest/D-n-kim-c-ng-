import DataSource from "./DataSource";

export default class ProviderManager {
    private providers = new Map<string, DataSource>();

    public register(id: string, provider: DataSource): void {
        this.providers.set(id, provider);
    }

    public unregister(id: string): void {
        this.providers.delete(id);
    }

    public get(id: string): DataSource | undefined {
        return this.providers.get(id);
    }

    public has(id: string): boolean {
        return this.providers.has(id);
    }

    public getAll(): DataSource[] {
        return [...this.providers.values()];
    }

    public clear(): void {
        this.providers.clear();
    }

    public count(): number {
        return this.providers.size;
    }
}

