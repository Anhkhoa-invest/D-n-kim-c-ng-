export interface Scenario {

    id: string;

    name: string;

    description: string;

    marketCondition: string;

    expectedReturn: number;

    expectedRisk: number;

    probability: number;

    createdAt: Date;

    updatedAt: Date;

}

