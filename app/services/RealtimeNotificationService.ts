import RealtimeEventBus from "./RealtimeEventBus";

export default class RealtimeNotificationService {
    static start() {
        RealtimeEventBus.subscribe("QUOTE_UPDATED", this.handleQuoteUpdate);
    }

    static stop() {
        RealtimeEventBus.unsubscribe("QUOTE_UPDATED", this.handleQuoteUpdate);
    }

    private static handleQuoteUpdate(payload: unknown) {
        console.log("Realtime Quote:", payload);

        // Sprint sau sẽ thêm:
        // - Cảnh báo tăng/giảm mạnh
        // - Chạm giá mục tiêu
        // - AI Recommendation
    }
}
