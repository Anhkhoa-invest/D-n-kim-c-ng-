export interface AIExecutionContext {
    symbol: string;

    market: string;

    userId?: string;

    metadata?: Record<string, unknown>;
}