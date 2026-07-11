import RealtimeScheduler from "./RealtimeScheduler";
import RealtimeEventBus from "./RealtimeEventBus";

type EventHandler = (payload?: unknown) => void;

export default class RealtimeMarketService {
    static start(symbols: string[]) {
        RealtimeScheduler.start(symbols);
    }

    static stop() {
        RealtimeScheduler.stop();
    }

    static subscribe(event: string, handler: EventHandler) {
        RealtimeEventBus.subscribe(event, handler);
    }

    static unsubscribe(event: string, handler: EventHandler) {
        RealtimeEventBus.unsubscribe(event, handler);
    }
}
