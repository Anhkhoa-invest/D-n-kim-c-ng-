import RealtimeEventBus from "./RealtimeEventBus";

export default class DashboardHistoryBridge {
    static start(callback: (data: any) => void) {
        RealtimeEventBus.subscribe(
            "AI_HISTORY_UPDATED",
            callback
        );
    }

    static stop(callback: (data: any) => void) {
        RealtimeEventBus.unsubscribe(
            "AI_HISTORY_UPDATED",
            callback
        );
    }
}

