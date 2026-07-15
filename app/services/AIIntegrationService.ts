import FinancialAnalysisEngine from "./FinancialAnalysisEngine";
import DiamondScoreEngine from "./DiamondScoreEngine";
import FusionDecisionEngine from "./FusionDecisionEngine";
import { AIExplainService } from "./AIExplainService";
import { AIContext } from "../ai/core/AIContext";

export default class AIIntegrationService {
  static async analyze(symbol: string) {
    // =========================
    // 1. Financial Analysis
    // =========================
    const financial = await FinancialAnalysisEngine.analyze(symbol);

    // Chuyển sang AIContext
    const context = financial as unknown as AIContext;

    // =========================
    // 2. Diamond Score
    // =========================
    const diamond = DiamondScoreEngine.calculate({
      aiScore: financial.score,
      buffett: 90,
      graham: 90,
      kelly: 90,
      thorp: 90,
      quant: 90,
      risk: 85,
      marginSafety: 90,
    });

    // =========================
    // 3. Fusion Decision
    // =========================
    const fusion = await FusionDecisionEngine.decide(
      symbol,
      financial.score,
      diamond.score
    );

    // =========================
    // 4. Confidence
    // =========================
    const confidence = Math.round(
      diamond.score * 0.5 +
      fusion.score * 0.5
    );

    // =========================
    // 5. AI Explain
    // =========================
    const explainService = new AIExplainService();
    const reasons = explainService.explain(context);

    // =========================
    // 6. Final Result
    // =========================
    return {
      symbol,
      financial,
      diamond,
      decision: fusion,
      confidence,
      explain: reasons,
      updatedAt: new Date(),
      version: "15.0",
    };
  }
}

