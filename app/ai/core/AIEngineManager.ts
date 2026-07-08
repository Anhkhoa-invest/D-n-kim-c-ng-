import { AIRegistry } from "./AIRegistry";
import { IAIEngine } from "../contracts/IAIEngine";

export class AIEngineManager {
  constructor(private registry: AIRegistry) {}

  register(engine: IAIEngine) {
    this.registry.register(engine);
  }

  unregister(id: string) {
    this.registry.unregister(id);
  }

  get(id: string) {
    return this.registry.get(id);
  }

  getAll() {
    return this.registry.getAll();
  }
}

