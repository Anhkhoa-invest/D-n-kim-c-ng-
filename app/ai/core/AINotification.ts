export enum AINotificationType {
    Info = "info",
    Warning = "warning",
    Error = "error",
    Success = "success",
}

export interface AINotification {
    id: string;

    type: AINotificationType;

    title: string;

    message: string;

    createdAt: Date;

    read: boolean;

    metadata?: Record<string, unknown>;
}

