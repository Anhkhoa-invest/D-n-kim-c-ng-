import RealtimeEventBus from "./RealtimeEventBus";

export default class AILiveRecommendationService {
    static start() {
        RealtimeEventBus.subscribe(
            "AI_SCORE_UPDATED",
            this.handleScoreUpdate
        );
    }

    static stop() {
        RealtimeEventBus.unsubscribe(
            "AI_SCORE_UPDATED",
            this.handleScoreUpdate
        );
    }

    private static async handleScoreUpdate(payload: any) {
        try {
            let recommendation = "HOLD";

            if (payload.score >= 90) {
                recommendation = "BUY";
            } else if (payload.score <= 60) {
                recommendation = "SELL";
            }

            RealtimeEventBus.emit("AI_RECOMMENDATION_UPDATED", {
                symbol: payload.symbol,
                score: payload.score,
                recommendation,
            });

        } catch (error) {
            console.error("AI Recommendation:", error);
        }
    }
}
