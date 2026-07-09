import WatchService from "./WatchService";

export default class WatchEngine {

    static active() {

        return WatchService
            .getAll()
            .filter(
                rule => rule.enabled
            );

    }

    static bySymbol(symbol: string) {

        return WatchService
            .getAll()
            .find(
                rule => rule.symbol === symbol
            );

    }

}
