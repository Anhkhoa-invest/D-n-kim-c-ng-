import { IAIRegistry } from "../contracts/IAIRegistry";
import { IAIEngine } from "../contracts/IAIEngine";

export class AIRegistry implements IAIRegistry {
  private readonly engines = new Map<string, IAIEngine>();

  register(engine: IAIEngine): void {
    this.engines.set(engine.id, engine);
  }

  unregister(id: string): void {
    this.engines.delete(id);
  }

  get(id: string): IAIEngine | undefined {
    return this.engines.get(id);
  }

  getAll(): IAIEngine[] {
    return [...this.engines.values()];
  }

has(id: string): boolean {
  return this.engines.has(id);
}
}
