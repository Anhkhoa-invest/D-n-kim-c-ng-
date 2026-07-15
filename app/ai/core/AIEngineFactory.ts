import { IAIEngine } from "../contracts/IAIEngine";

import { AIFinancialAnalyzer } from "../AIFinancialAnalyzer";
import { TemGrowthAnalyzer } from "../GrowthAnaLyzerTem";
import { AIRiskAnalyzer } from "../AIRiskAnalyzer";


import { LegacyEngine } from "../engines/LegacyEngine";
import { AIScoreCalculator } from "../engines/AIScoreCalculator";

export class AIEngineFactory {
  static createDefault(): IAIEngine[] {
    return [
      new AIFinancialAnalyzer(),
      new TemGrowthAnalyzer(),

      new AIRiskAnalyzer(),

      
      new LegacyEngine(),
      
    ];
  }
}

