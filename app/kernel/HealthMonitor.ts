export class HealthMonitor {
    private readonly status = new Map<string, boolean>();

    setHealthy(module: string): void {
        this.status.set(module, true);
    }

    setUnhealthy(module: string): void {
        this.status.set(module, false);
    }

    isHealthy(module: string): boolean {
        return this.status.get(module) ?? false;
    }

    getAll(): Map<string, boolean> {
        return this.status;
    }
}
