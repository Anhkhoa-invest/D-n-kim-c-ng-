import { aiRegistry } from "../ai/AIBootstrap";
import AIScoringService from "./AIScoringService";
import FinancialRepository from "../repositories/FinancialRepository";

export interface AIScoreResult {
  total: number;
  financial: number;
  growth: number;
  valuation: number;
  risk: number;
  comment: string;
}

export class AIService {
  static analyze(code: string): AIScoreResult {
    const engine = aiRegistry.get?.("investment-decision");
    if (engine) {
  console.log("AI Engine loaded:", engine.name);
}

    const database: Record<string, AIScoreResult> = {
      MBB: {
        total: 94,
        financial: 95,
        growth: 93,
        valuation: 92,
        risk: 96,
        comment: "Ngân hàng chất lượng cao, ROE tốt, định giá hợp lý.",
      },

      HHV: {
        total: 88,
        financial: 86,
        growth: 90,
        valuation: 87,
        risk: 89,
        comment: "Hưởng lợi đầu tư công, phù hợp đầu tư trung hạn.",
      },

      FPT: {
        total: 96,
        financial: 97,
        growth: 98,
        valuation: 92,
        risk: 95,
        comment: "Doanh nghiệp công nghệ hàng đầu Việt Nam.",
      },

      VCB: {
        total: 92,
        financial: 96,
        growth: 90,
        valuation: 88,
        risk: 94,
        comment: "Ngân hàng đầu ngành, tài chính rất mạnh.",
      },

      ACB: {
        total: 90,
        financial: 92,
        growth: 89,
        valuation: 90,
        risk: 90,
        comment: "Ngân hàng tư nhân có chất lượng tài sản tốt.",
      },
    };
const financial = FinancialRepository.get(code);
   const stock =
  database[code] ?? {
    
total: 70,
financial: financial ? financial.roe : 70,
growth: financial ? financial.revenueGrowth : 70,
valuation: financial ? financial.pe : 70,
risk: financial ? financial.debtRatio : 70,
comment: "Chưa có dữ liệu AI.",

   
  };

const score = AIScoringService.score({
  financial: stock.financial,
  growth: stock.growth,
  valuation: stock.valuation,
  risk: stock.risk,
});

return {
  ...stock,
  total: score

};


  }
}

