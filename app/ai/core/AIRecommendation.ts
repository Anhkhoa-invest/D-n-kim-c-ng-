export enum RecommendationType {
    StrongBuy = "STRONG_BUY",
    Buy = "BUY",
    Hold = "HOLD",
    Sell = "SELL",
    StrongSell = "STRONG_SELL",
}

export interface AIRecommendation {
    symbol: string;

    score: number;

    recommendation: RecommendationType;

    confidence: number;

    reason: string[];

    createdAt: Date;
}

