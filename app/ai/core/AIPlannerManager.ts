import { AIPlanner } from "./AIPlanner";

export class AIPlannerManager {
  private planners = new Map<string, AIPlanner>();

  register(planner: AIPlanner) {
    this.planners.set(planner.id, planner);
  }

  get(id: string): AIPlanner | undefined {
    return this.planners.get(id);
  }

  getAll(): AIPlanner[] {
    return Array.from(this.planners.values());
  }

  remove(id: string) {
    this.planners.delete(id);
  }

  clear() {
    this.planners.clear();
  }
}
