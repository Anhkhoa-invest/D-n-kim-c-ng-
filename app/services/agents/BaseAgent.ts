import IAgent, { AgentResult } from "./IAgent";

export default abstract class BaseAgent implements IAgent {

    abstract readonly name: string;

    abstract analyze(symbol: string): Promise<AgentResult>;

    protected success(
        score: number,
        confidence: number,
        explanation: string,
        metadata?: Record<string, any>
    ): AgentResult {

        return {
            score,
            confidence,
            explanation,
            metadata,
        };

    }

    protected failure(
        explanation: string,
        metadata?: Record<string, any>
    ): AgentResult {

        return {
            score: 0,
            confidence: 0,
            explanation,
            metadata,
        };

    }

}
