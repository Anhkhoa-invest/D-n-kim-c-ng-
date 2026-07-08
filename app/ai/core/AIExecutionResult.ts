export interface AIExecutionResult {
    success: boolean;

    engineId: string;

    duration: number;

    result: unknown;

    error?: string;
}
