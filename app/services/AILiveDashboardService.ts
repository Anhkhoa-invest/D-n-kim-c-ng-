import RealtimeEventBus from "./RealtimeEventBus";

export default class AILiveDashboardService {
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
        RealtimeEventBus.emit("DASHBOARD_UPDATED", {
            ...payload,
            updatedAt: new Date().toISOString(),
        });
    }
}
