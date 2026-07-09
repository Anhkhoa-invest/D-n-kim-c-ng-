export interface Thesis {

    id: string;

    symbol: string;

    title: string;

    reason: string;

    expectedPrice: number;

    expectedReturn: number;

    riskLevel: "LOW" | "MEDIUM" | "HIGH";

    status: "ACTIVE" | "COMPLETED" | "INVALID";

    createdAt: Date;

    updatedAt: Date;

}

