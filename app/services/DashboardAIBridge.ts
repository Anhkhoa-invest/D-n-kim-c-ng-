import AIIntegrationService from "./AIIntegrationService";

export interface DashboardAIResult {
  symbol: string;

  score: number;

  recommendation: string;

  confidence: number;

  explain: string[];

  financial: any;

  diamond: any;

  decision: any;

  version: string;
}

export default class DashboardAIBridge {
  static async load(
    symbol: string
  ): Promise<DashboardAIResult> {

    const ai =
      await AIIntegrationService.analyze(symbol);

    return {
      symbol,

      score: ai.diamond.score,

      recommendation:
        ai.decision.recommendation,

      confidence:
        ai.confidence,

      explain:
        ai.explain,

      financial:
        ai.financial,

      diamond:
        ai.diamond,

      decision:
        ai.decision,

      version:
        ai.version,
    };
  }
}
