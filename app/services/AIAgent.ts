export interface AIAgent {
    id: string;
    name: string;

    start(): Promise<boolean>;
    stop(): Promise<boolean>;

    health(): Promise<{
        status: string;
        agent: string;
    }>;

    execute(input: any): Promise<any>;
}

