import { AIOrchestrator } from "./AIOrchestrator";
import { AIExecutionContext } from "./AIExecutionContext";
import { AIExecutionResult } from "./AIExecutionResult";

export class AIExecutor {
    constructor(private orchestrator: AIOrchestrator) {}

    async execute(context: AIExecutionContext): Promise<AIExecutionResult> {
        throw new Error("Not implemented");
    }
}

