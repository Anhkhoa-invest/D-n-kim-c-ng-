import { IAIEngine } from "../contracts/IAIEngine";
import { AIContext } from "../core/AIContext";
import { AIResult } from "../core/AIResultTemp";
import { AIService } from "../../services/AIService";



export class LegacyEngine implements IAIEngine {
  readonly id = "legacy";

  readonly name = "Legacy Engine";

  readonly version = "1.0.0";

  readonly description =
    "Adapter cho hệ thống AI hiện tại của Kim Cương OS.";
getName(): string {
    return this.name;
}

  async analyze(context: AIContext): Promise<AIResult> {
    const result = AIService.analyze(context.symbol);

    return {
      score: result.total,
      recommendation: "HOLD",
      risk: "MEDIUM",
      summary: result.comment,

      metadata: {
        financial: result.financial,
        growth: result.growth,
        valuation: result.valuation,
        riskScore: result.risk,
      },
    };
  }
}
