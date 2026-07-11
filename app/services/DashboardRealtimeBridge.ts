import RealtimeEventBus from "./RealtimeEventBus";

export default class DashboardRealtimeBridge {
  static start(callback: (data: any) => void) {
    RealtimeEventBus.subscribe(
      "DASHBOARD_UPDATED",
      callback
    );
  }

  static stop(callback: (data: any) => void) {
    RealtimeEventBus.unsubscribe(
      "DASHBOARD_UPDATED",
      callback
    );
  }
}
