import AgentRegistry from "../AgentRegistry";

export default class AgentOrchestrator {
  constructor(
    private readonly registry = new AgentRegistry()
  ) {}

  async analyze(symbol: string) {
    const agents = this.registry.getAll();

    const results = await Promise.allSettled(
      agents.map((agent) => agent.analyze(symbol))
    );

    const success = results
      .filter(
        (
          result
        ): result is PromiseFulfilledResult<Awaited<ReturnType<typeof agents[number]["analyze"]>>> =>
          result.status === "fulfilled"
      )
      .map((result) => result.value);

    const failed = results.filter(
      (result) => result.status === "rejected"
    );

    return {
      symbol,
      totalAgents: agents.length,
      completed: success.length,
      failed: failed.length,
      results: success,
    };
  }
}
