import { AIPipeline } from "./AIPipeline";
import { IAIEngine } from "../contracts/IAIEngine";

export class AIOrchestrator {
  constructor(private pipeline: AIPipeline) {}

  getPrimaryEngine(): IAIEngine | null {
    return this.pipeline.getPrimary();
  }

  getAllEngines(): IAIEngine[] {
    return this.pipeline.getAll();
  }

start() {
    console.log("AI Orchestrator started");
}

stop() {
    console.log("AI Orchestrator stopped");
}

execute() {
    return this.getPrimaryEngine();
}

reset() {
    console.log("AI Orchestrator reset");
}
}

