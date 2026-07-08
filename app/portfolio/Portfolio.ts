export interface Portfolio {
    id: string;
    name: string;
    ownerId: string;

    totalValue: number;
    totalCost: number;
    profit: number;
    profitPercent: number;

    createdAt: Date;
    updatedAt: Date;
}

