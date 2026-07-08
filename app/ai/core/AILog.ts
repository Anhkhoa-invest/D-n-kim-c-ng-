export enum AILogLevel {
    Debug = "debug",
    Info = "info",
    Warning = "warning",
    Error = "error",
}

export interface AILog {
    id: string;

    level: AILogLevel;

    message: string;

    createdAt: Date;

    metadata?: Record<string, unknown>;
}

