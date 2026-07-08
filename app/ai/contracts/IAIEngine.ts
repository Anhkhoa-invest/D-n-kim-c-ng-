import { AIContext } from "../core/AIContext";
import { AIResult } from "../core/AIResultTemp";

export interface IAIEngine {
  readonly id: string;
  readonly name: string;
  readonly version: string;
  readonly description?: string;
getName(): string;
  analyze(context: AIContext): Promise<AIResult>;
}
