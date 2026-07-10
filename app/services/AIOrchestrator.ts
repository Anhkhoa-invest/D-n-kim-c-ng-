import MarketProvider from "./MarketProvider";
import AIRecommendationService from "./AIRecommendationService";
import FinancialRepository from "../repositories/FinancialRepository";
import AIScoringService from "./AIScoringService";
import DecisionEngine from "./DecisionEngine";
import AIAnalysisReportService from "./AIAnalysisReportService";

export default class AIOrchestrator {
 static async analyze(symbol: string) {

    const stock = await MarketProvider.getStock(symbol);

    const financial = FinancialRepository.get(symbol);

    if (!financial) {
        return {
            error: "Không tìm thấy dữ liệu tài chính."
        };
    }

    const score = AIScoringService.scoreFromRepository(symbol);

    const decision = DecisionEngine.decide({
        score,
        roe: financial.roe,
        pe: financial.pe,
        debt: financial.debtRatio,
        growth: financial.profitGrowth
    });
const report = AIAnalysisReportService.create(
    symbol,
    score,
    decision.action,
    decision.thesis,
    decision.reason
);

    return {
        stock,
        score,
        decision,
        report
    };
}
}

