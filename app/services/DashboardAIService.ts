import AIIntegrationService from "./AIIntegrationService";

export interface DashboardAIData {
    symbol: string;

    score: number;

    rating: string;

    recommendation: string;

    confidence: number;

    marketStatus: string;
}

export default class DashboardAIService {

    static async load(symbol: string): Promise<DashboardAIData> {
const result = await AIIntegrationService.analyze(symbol);

       return {
    symbol,

    score: result.diamond.score,

    rating: result.diamond.rating,

    recommendation: result.diamond.recommendation,

    confidence: result.diamond.confidence,

    marketStatus: "READY"
};

    }

}
