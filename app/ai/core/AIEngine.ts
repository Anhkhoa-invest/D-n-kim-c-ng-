import { AIContext } from "./AIContext";
import { AIResult } from "./AIResultTemp";

export interface AIEngine {
  readonly name: string;
  readonly version: string;

  analyze(context: AIContext): Promise<AIResult>;
}

