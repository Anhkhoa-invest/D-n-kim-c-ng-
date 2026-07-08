export interface AnalysisResult {
    symbol: string;

    market: unknown;

    trend: unknown;

    growth: unknown;

    risk: unknown;

    score: {
        total: number;
        grade: string;
    };

    decision: unknown;

    analyzedAt: number;
}

