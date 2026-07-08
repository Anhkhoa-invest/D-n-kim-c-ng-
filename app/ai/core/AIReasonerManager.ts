import { AIReasoner } from "./AIReasoner";

export class AIReasonerManager {
  private reasoners = new Map<string, AIReasoner>();

  register(reasoner: AIReasoner) {
    this.reasoners.set(reasoner.id, reasoner);
  }

  get(id: string): AIReasoner | undefined {
    return this.reasoners.get(id);
  }

  getAll(): AIReasoner[] {
    return Array.from(this.reasoners.values());
  }

  remove(id: string) {
    this.reasoners.delete(id);
  }

  clear() {
    this.reasoners.clear();
  }
}
