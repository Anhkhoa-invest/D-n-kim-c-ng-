export interface AIAnalysisReport {
    symbol: string;
    score: number;
    recommendation: string;
    quality: string;
    risk: string;
    growth: string;
    dividend: string;
    thesis: string;
    reason: string;
}

export default class AIAnalysisReportService {

    static create(
        symbol: string,
        score: number,
        recommendation: string,
        thesis: string,
        reason: string
    ): AIAnalysisReport {

        return {
            symbol,
            score,
            recommendation,

            quality:
                score >= 90 ? "A+" :
                score >= 80 ? "A" :
                score >= 70 ? "B+" : "B",

            risk:
                score >= 85 ? "Low" :
                score >= 70 ? "Medium" : "High",

            growth:
                score >= 80 ? "Strong" : "Normal",

            dividend:
                score >= 75 ? "Good" : "Average",

            thesis,

            reason
        };
    }

}
