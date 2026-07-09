export interface AllocationHistory {

    id: string;

    symbol: string;

    previousWeight: number;

    newWeight: number;

    reason: string;

    changedBy: string;

    createdAt: Date;

}
