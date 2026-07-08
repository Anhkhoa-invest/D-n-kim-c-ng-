import { IAIEngine } from "../contracts/IAIEngine";

export class AIPipeline {
    private engines: IAIEngine[] = [];

    register(engine: IAIEngine) {
        this.engines.push(engine);
    }

    getPrimary(): IAIEngine | null {
        return this.engines[0] ?? null;
    }

    getAll(): IAIEngine[] {
        return this.engines;
    }

run(data: any) {
    const engine = this.getPrimary();

    if (!engine) {
        throw new Error("No AI Engine registered");
    }

    return engine.analyze(data);
}
}