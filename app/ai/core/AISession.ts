export enum AISessionStatus {
    Active = "active",
    Inactive = "inactive",
    Expired = "expired",
}

export interface AISession {
    id: string;
    userId: string;
    status: AISessionStatus;
    createdAt: Date;
    expiresAt?: Date;
    metadata?: Record<string, unknown>;
}
