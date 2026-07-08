import { AIExecutionPlan } from "./AIExecutionPlan";

export class AIExecutionPlanner {
  static create(engineIds: string[]): AIExecutionPlan {
    return {
      engines: engineIds,
      parallel: true,
    };
  }
}

