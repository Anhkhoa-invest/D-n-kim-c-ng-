export interface Allocation {
    id: string;

    symbol: string;

    targetWeight: number;

    currentWeight: number;

    capital: number;

    updatedAt: Date;
}
