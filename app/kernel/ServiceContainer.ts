export class ServiceContainer {
    private readonly services = new Map<string, unknown>();

    register<T>(key: string, service: T): void {
        this.services.set(key, service);
    }

    registerSingleton<T>(key: string, factory: () => T): void {
        if (!this.services.has(key)) {
            this.services.set(key, factory());
        }
    }

    resolve<T>(key: string): T {
        const service = this.services.get(key);

        if (!service) {
            throw new Error(`Service '${key}' not found.`);
        }

        return service as T;
    }

    resolveOrNull<T>(key: string): T | null {
        return (this.services.get(key) as T) ?? null;
    }

    has(key: string): boolean {
        return this.services.has(key);
    }

    remove(key: string): void {
        this.services.delete(key);
    }

    clear(): void {
        this.services.clear();
    }
}

