import RealtimeEventBus from "./RealtimeEventBus";

export default class AILiveAnalysisService {
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

    private static async handleQuoteUpdate(payload: unknown) {
        console.log("AI Live Analysis:", payload);

        // Sprint tiếp theo:
        // - Tính lại AI Score
        // - Risk Score
        // - Recommendation
        // - Target Price
    }
}

