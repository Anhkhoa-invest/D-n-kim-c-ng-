export interface AIPlanner {
  id: string;
  name: string;

  createPlan(input: unknown): Promise<unknown>;
}