import { BaseAgent } from "./BaseAgent";

export class MemoryAgent extends BaseAgent {

    private memories: unknown[] = [];

    constructor() {
        super("MemoryAgent");
    }

    async execute(input: unknown): Promise<unknown> {

        this.memories.push(input);

        return {
            success: true,
            memoryCount: this.memories.length,
            latest: input,
        };
    }

    history() {
        return [...this.memories];
    }

    clear() {
        this.memories = [];
    }
}
