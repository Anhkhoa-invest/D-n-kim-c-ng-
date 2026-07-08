import { AIKernelBuilder } from "./AIKernelBuilder";
import { AIKernel } from "./AIKernel";

export class AIServiceLocator {
  private static kernel: AIKernel | null = null;

  static getKernel(): AIKernel {
    if (!this.kernel) {
      this.kernel = AIKernelBuilder.build();
    }

    return this.kernel;
  }
}

