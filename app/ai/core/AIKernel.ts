
import { AIRegistry } from "./AIRegistry";
import { AIEngineManager } from "./AIEngineManager";
import { AIEngineFactory } from "./AIEngineFactory";

export class AIKernel {
  readonly registry = new AIRegistry();

  readonly manager = new AIEngineManager(this.registry);

  boot() {
    const engines = AIEngineFactory.createDefault();

    for (const engine of engines) {
      this.manager.register(engine);
    }
  }


getPrimaryEngine() {
  const engines = this.manager.getAll();
  return engines.length > 0 ? engines[0] : null;
}
}
