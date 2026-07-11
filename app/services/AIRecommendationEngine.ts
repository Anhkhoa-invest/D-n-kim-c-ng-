import { AIReport } from "./AIReportEngine";

export default class AIRecommendationEngine {

    static recommend(report: AIReport): string {

        if (report.score >= 90) {
            return "STRONG BUY";
        }

        if (report.score >= 80) {
            return "BUY";
        }

        if (report.score >= 65) {
            return "HOLD";
        }

        if (report.score >= 50) {
            return "REDUCE";
        }

        return "SELL";
    }

}

