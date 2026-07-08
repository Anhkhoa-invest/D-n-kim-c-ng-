import { AIPipeline } from "./AIPipeline";
import { IAIEngine } from "../contracts/IAIEngine";

export class AIPipelineBuilder {
  static create(engines: IAIEngine[]): AIPipeline {
    const pipeline = new AIPipeline();

    for (const engine of engines) {
      pipeline.register(engine);
    }

    return pipeline;
  }
}
