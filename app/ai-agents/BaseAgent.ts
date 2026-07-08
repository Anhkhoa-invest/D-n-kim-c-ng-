export abstract class BaseAgent {
    constructor(
        public readonly name: string
    ) {}

    start(): void {
        console.log(`🤖 ${this.name} started`);
    }

    stop(): void {
        console.log(`🛑 ${this.name} stopped`);
    }

    abstract execute(input: unknown): Promise<unknown>;
}

