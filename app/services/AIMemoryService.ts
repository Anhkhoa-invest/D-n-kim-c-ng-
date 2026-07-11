interface AIMemoryItem {
    id: string;
    symbol: string;
    score: number;
    recommendation: string;
    explanation: string;
    status: "PENDING" | "WIN" | "LOSS";
    createdAt: string;
}

export default class AIMemoryService {

    private static memory: AIMemoryItem[] = [];

    static save(item: AIMemoryItem) {
        this.memory.unshift(item);

        if (this.memory.length > 5000) {
            this.memory.pop();
        }
    }

    static getAll() {
        return this.memory;
    }

    static clear() {
        this.memory = [];
    }

}

