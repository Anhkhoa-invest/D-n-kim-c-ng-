export interface MemoryEntry {
    id: string;

    symbol: string;

    createdAt: Date;

    source: string;

    action: "BUY" | "SELL" | "HOLD";

    score: number;

    confidence: number;

    payload: unknown;

    note?: string;
}

