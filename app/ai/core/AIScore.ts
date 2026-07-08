export interface AIScore {
    symbol: string;

    fundamental: number;

    technical: number;

    risk: number;

    sentiment: number;

    total: number;

    updatedAt: Date;
}

