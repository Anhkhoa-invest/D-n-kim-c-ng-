import TrendAnalyzer from "./TrendAnalyzer";
import GrowthAnalyzer from "./GrowthAnalyzer";
import RiskAnalyzer from "./RiskAnalyzer";
import ScoreEngine from "./ScoreEngine";
import DecisionEngine from "./DecisionEngine";

import type { AnalysisResult } from "../models/AnalysisResult";
import VietnamMarketProvider from "../providers/VietnamMarketProvider";
const marketProvider = new VietnamMarketProvider();

class MarketEngine {

    async getStockPrice(symbol: string) {
    return marketProvider.getStockPrice(symbol);
}


    async analyze(symbol: string): Promise<AnalysisResult> {

        const market = await this.getStockPrice(symbol);

        const trend = TrendAnalyzer.analyze([10, 11, 12, 13, 14]);

        const growth = GrowthAnalyzer.analyze(18);

        const risk = RiskAnalyzer.analyze(25);

        const score = ScoreEngine.calculate(
            80,
            90,
            90
        );
     const decision = DecisionEngine.decide({
    score: score.total,
    roe: 22,
    pe: 12,
    debt: 35,
    growth: 18,
});


        return {
            symbol,
            market,
            trend,
            growth,
            risk,
            score,
            decision,
            analyzedAt: Date.now(),
        };
    }
}

export default new MarketEngine();

