export interface Opportunity {

    id: string;

    symbol: string;

    score: number;

    reason: string;

    confidence: number;

    targetPrice: number;

    currentPrice: number;

    upside: number;

    createdAt: Date;

}

