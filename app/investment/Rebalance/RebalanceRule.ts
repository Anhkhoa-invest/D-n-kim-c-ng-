export interface RebalanceRule {

    id: string;

    symbol: string;

    targetWeight: number;

    tolerance: number;

    enabled: boolean;

}

