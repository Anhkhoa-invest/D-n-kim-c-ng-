import { AIKernel } from "./AIKernel";
import { AIEngineFactory } from "./AIEngineFactory";

export class AIKernelBuilder {
  static build(): AIKernel {
    const kernel = new AIKernel();

    for (const engine of AIEngineFactory.createDefault()) {
      kernel.manager.register(engine);
    }

    return kernel;
  }
}

