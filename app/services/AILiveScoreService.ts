import RealtimeEventBus from "./RealtimeEventBus";


export default class AILiveScoreService {
    static start() {
        RealtimeEventBus.subscribe(
            "QUOTE_UPDATED",
            this.handleQuoteUpdate
        );
    }

    static stop() {
        RealtimeEventBus.unsubscribe(
            "QUOTE_UPDATED",
            this.handleQuoteUpdate
        );
    }

    private static async handleQuoteUpdate(payload: any) {
        try {
            const score = payload.aiScore ?? 90;


            RealtimeEventBus.emit("AI_SCORE_UPDATED", {
                symbol: payload.symbol,
                score
            });

        } catch (error) {
            console.error("AI Live Score:", error);
        }
    }
}
