import { InvestmentDecisionEngine } from "../engines/InvestmentDecisionEngine";
import { LegacyEngine } from "../engines/LegacyEngine";
import { IAIEngine } from "../contracts/IAIEngine";

export class AIEngineFactory {
  static createDefault(): IAIEngine[] {
    return [
      new InvestmentDecisionEngine(),
      new LegacyEngine(),
    ];
  }
}
