import { SourceManager } from "./SourceManager";
import { HealthCheckEngine } from "./HealthCheckEngine";

export class FailoverManager {
    constructor(
        private sourceManager: SourceManager,
        private health = new HealthCheckEngine()
    ) {}

    async validateActiveProvider() {
        const active = this.sourceManager.getActiveProvider();

        if (!active) return;

        const result = await this.health.check(active);

        if (!result.online) {
            const providers = this.sourceManager.listProviders();

            for (const name of providers) {
                if (name === active) continue;

                const next = await this.health.check(name);

                if (next.online) {
                    this.sourceManager.switchProvider(name);
                    break;
                }
            }
        }
    }
}

