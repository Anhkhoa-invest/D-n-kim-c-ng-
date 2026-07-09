export interface Simulation {

    id: string;

    name: string;

    strategy: string;

    initialCapital: number;

    currentCapital: number;

    profitLoss: number;

    profitLossPercent: number;

    startDate: Date;

    endDate: Date;

    createdAt: Date;

}

