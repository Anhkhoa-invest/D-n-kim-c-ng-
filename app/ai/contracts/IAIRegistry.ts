import { IAIEngine } from "./IAIEngine";

export interface IAIRegistry {
  register(engine: IAIEngine): void;

  unregister(id: string): void;

  get(id: string): IAIEngine | undefined;

  getAll(): IAIEngine[];
}
