import { IAIEngine } from "../contracts/IAIEngine";
import { AIScoreCalculator } from "./AIScoreCalculator";
import { AIFinancialAnalyzer } from "../AIFinancialAnalyzer";
import { TemGrowthAnalyzer } from "../GrowthAnaLyzerTem";

import { AIRiskAnalyzer } from "../AIRiskAnalyzer";

export class InvestmentDecisionEngine implements IAIEngine {
  readonly id = "investment-decision";
  readonly name = "Investment Decision Engine";
  readonly version = "1.0.0";
  readonly description = "Đưa ra quyết định đầu tư";
  
private calculator = new AIScoreCalculator();


  getName(): string {
    return this.name;
  }
testScore(
    symbol: string,
    fundamental: number,
    technical: number,
    risk: number,
    sentiment: number
) {


   return this.calculator.calculate(
    symbol,
    fundamental,
    technical,
    risk,
    sentiment
);

}
  async analyze(data: any) {
    const score = this.calculator.calculate(
    data.symbol,
    data.fundamental,
    data.technical,
    data.risk,
    data.sentiment
);
    
    return {
      score: score.total,
      recommendation: "BUY" as const,
      risk: "MEDIUM" as const,
      summary: "Doanh nghiệp đạt tiêu chuẩn đầu tư.",
metadata: {
    financial: score.fundamental,
    growth: score.sentiment,
    valuation: score.technical,
    riskScore: score.risk,
},

     
    };
  }
}
