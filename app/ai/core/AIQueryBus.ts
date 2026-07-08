import { AIQuery } from "./AIQuery";

type QueryHandler = (query: AIQuery) => unknown;

export class AIQueryBus {
  private handlers = new Map<string, QueryHandler>();

  register(name: string, handler: QueryHandler) {
    this.handlers.set(name, handler);
  }

  execute(query: AIQuery): unknown {
    const handler = this.handlers.get(query.name);

    if (!handler) {
      throw new Error(`Query not found: ${query.name}`);
    }

    return handler(query);
  }
}

