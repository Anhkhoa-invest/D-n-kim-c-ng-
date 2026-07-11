import AgentOrchestrator from "./agents/AgentOrchestrator/AgentOrchestrator";
import AIAnalysisPipeline from "./AIAnalysisPipeline";
import AIAccuracyEngine from "./AIAccuracyEngine";
import FusionScoreEngine from "./FusionScoreEngine";
import DiamondScoreEngine from "./DiamondScoreEngine";
import { AIRecommendationService } from "./AIRecommendationService";
import AIReportGenerator from "./AIReportGenerator";
import AIExplainService from "./AIExplainService";


export default class AIIntegrationService {
  private orchestrator = new AgentOrchestrator();

  async analyze(symbol: string) {
    const result = await this.orchestrator.analyze(symbol);


    const pipeline = AIAnalysisPipeline.analyze(result);

    const accuracy = AIAccuracyEngine.getAccuracy();
    
const fusion = FusionScoreEngine.calculate([
    accuracy.accuracy,
]);
const diamond = DiamondScoreEngine.calculate({
    aiScore: fusion,
    buffett: 90,
    graham: 90,
    kelly: 90,
    thorp: 90,
    quant: 90,
    risk: 90,
    marginSafety: 90,
});
const explain = AIExplainService.explain(diamond.score);

const recommendation =
    AIRecommendationService.recommend(diamond.score);


const report = AIReportGenerator.generate();

  return {
    pipeline,
    accuracy,
    fusion,
    diamond,
    recommendation,
    report,
    explain
};

}
}