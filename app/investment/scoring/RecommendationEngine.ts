export class RecommendationEngine {
    evaluate(score: number): string {
        if (score >= 95) return "Strong Buy";
        if (score >= 85) return "Buy";
        if (score >= 70) return "Hold";
        if (score >= 50) return "Reduce";

        return "Sell";
    }
}

