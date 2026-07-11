import RealtimeEventBus from "./RealtimeEventBus";

export default class AILiveExplainService {
    static start() {
        RealtimeEventBus.subscribe(
            "AI_RECOMMENDATION_UPDATED",
            this.handleRecommendation
        );
    }

    static stop() {
        RealtimeEventBus.unsubscribe(
            "AI_RECOMMENDATION_UPDATED",
            this.handleRecommendation
        );
    }

    private static handleRecommendation(payload: any) {
        const explanation = this.generateExplanation(payload);

        RealtimeEventBus.emit("AI_EXPLANATION_UPDATED", {
            ...payload,
            explanation,
        });
    }

    private static generateExplanation(payload: any): string {
        if (payload.recommendation === "BUY") {
            return `AI Score ${payload.score}: Xu hướng tích cực, đề xuất MUA.`;
        }

        if (payload.recommendation === "SELL") {
            return `AI Score ${payload.score}: Rủi ro cao, đề xuất BÁN.`;
        }

        return `AI Score ${payload.score}: Tiếp tục QUAN SÁT.`;
    }
}
