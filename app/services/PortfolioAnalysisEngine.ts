import FinancialAnalysisEngine from "./FinancialAnalysisEngine";
import DecisionEngine from "./DecisionEngine";
import DiamondScoreEngine from "./DiamondScoreEngine";

export interface PortfolioAnalysisResult {
    symbol: string;
    score: number;
    rating: string;
    recommendation: string;
    confidence: number;
}

export default class PortfolioAnalysisEngine {

    static async analyze(
        symbol: string
    ): Promise<PortfolioAnalysisResult> {

        const financial =
            await FinancialAnalysisEngine.analyze(symbol);

        const decision =
            DecisionEngine.decide({
                score: financial.score,
                roe: financial.roe,
                pe: financial.pe,
                debt: financial.debt,
                growth: financial.growth,
            });

        const diamond =
            DiamondScoreEngine.calculate({
                aiScore: financial.score,

                buffett: financial.score,
                graham: financial.score,
                kelly: financial.score,
                thorp: financial.score,
                quant: financial.score,

                risk: 90,
                marginSafety: 90,
            });

        return {
            symbol,
            score: diamond.score,
            rating: diamond.rating,
            recommendation: decision.action,
            confidence: diamond.confidence,
        };
    }
}

