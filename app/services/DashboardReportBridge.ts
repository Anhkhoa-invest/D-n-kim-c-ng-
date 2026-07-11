import RealtimeEventBus from "./RealtimeEventBus";

export default class DashboardReportBridge {

    static start(callback: (data: any) => void) {
        RealtimeEventBus.subscribe(
            "AI_REPORT_UPDATED",
            callback
        );
    }

    static stop(callback: (data: any) => void) {
        RealtimeEventBus.unsubscribe(
            "AI_REPORT_UPDATED",
            callback
        );
    }
}
