import { Module } from "./Module";

export class ModuleRegistry {
    private readonly modules = new Map<string, Module>();

    register(module: Module): void {
        this.modules.set(module.name, module);
    }

    unregister(name: string): void {
        this.modules.delete(name);
    }

    has(name: string): boolean {
        return this.modules.has(name);
    }

    get(name: string): Module | undefined {
        return this.modules.get(name);
    }

    getAll(): Module[] {
        return Array.from(this.modules.values());
    }

    bootAll(): void {
        for (const module of this.modules.values()) {
            module.boot?.();
        }
    }

    shutdownAll(): void {
        const modules = Array.from(this.modules.values()).reverse();

        for (const module of modules) {
            module.shutdown?.();
        }
    }
}

