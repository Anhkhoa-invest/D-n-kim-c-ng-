export interface AIReasoner {
  id: string;
  name: string;

  reason(input: unknown): Promise<unknown>;
}