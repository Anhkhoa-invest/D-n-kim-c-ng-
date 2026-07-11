import AIReportGenerator from "./AIReportGenerator";
import AIExplainEngine from "./AIExplainEngine";
import AIRecommendationEngine from "./AIRecommendationEngine";

export default class AIPipelineBuilder {

    static build() {

        const report = AIReportGenerator.generate();

        const explanation =
            AIExplainEngine.explain(report);

        const recommendation =
            AIRecommendationEngine.recommend(report);

        return {
            report,
            explanation,
            recommendation,
        };

    }

}
