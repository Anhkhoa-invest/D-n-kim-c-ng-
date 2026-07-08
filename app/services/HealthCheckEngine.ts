export interface ProviderHealth {
    name: string;
    online: boolean;
    latency: number;
    lastCheck: Date;
}

export class HealthCheckEngine {
    async check(name: string): Promise<ProviderHealth> {
        const start = Date.now();

        try {
            // Sau này sẽ gọi provider thật
            await Promise.resolve();

            return {
                name,
                online: true,
                latency: Date.now() - start,
                lastCheck: new Date()
            };
        } catch {
            return {
                name,
                online: false,
                latency: -1,
                lastCheck: new Date()
            };
        }
    }
}

