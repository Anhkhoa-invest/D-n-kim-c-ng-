
export interface AgentResult {
    score: number;
    confidence: number;
    explanation: string;
    metadata?: Record<string, any>;
}

export default interface IAgent {

    readonly name: string;

    analyze(symbol: string): Promise<AgentResult>;

}
