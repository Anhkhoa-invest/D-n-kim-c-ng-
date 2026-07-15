import { AIContext } from "./AIContext";
import { AIResult } from "./AIResultTemp";

export interface IAIEngine {
    readonly id: string;
    readonly name: string;
    readonly version: string;
    readonly description: string;

    analyze(context: AIContext): Promise<AIResult>;
}

