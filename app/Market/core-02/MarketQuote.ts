export interface MarketQuote {
    symbol: string;
    name?: string;

    price: number;
    open: number;
    high: number;
    low: number;
    previousClose: number;

    volume: number;

    change: number;
    changePercent: number;

    timestamp: number;
    updatedAt: Date;

    source: string;
}

