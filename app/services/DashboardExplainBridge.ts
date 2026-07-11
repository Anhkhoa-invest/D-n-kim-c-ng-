import RealtimeEventBus from "./RealtimeEventBus";

export default class DashboardExplainBridge {
    static start(callback: (data: any) => void) {
        RealtimeEventBus.subscribe(
            "AI_EXPLANATION_UPDATED",
            callback
        );
    }

    static stop(callback: (data: any) => void) {
        RealtimeEventBus.unsubscribe(
            "AI_EXPLANATION_UPDATED",
            callback
        );
    }
}
