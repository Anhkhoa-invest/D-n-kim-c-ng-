export interface IntrinsicValue {
    symbol: string;

    currentPrice: number;

    intrinsicPrice: number;

    marginOfSafety: number;

    method: string;

    calculatedAt: Date;
}

