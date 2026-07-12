export default class HealthMonitor {
    private healthy = true;

    public isHealthy(): boolean {
        return this.healthy;
    }

    public setHealthy(): void {
        this.healthy = true;
    }

    public setUnhealthy(): void {
        this.healthy = false;
    }

    public toggle(): void {
        this.healthy = !this.healthy;
    }
}
