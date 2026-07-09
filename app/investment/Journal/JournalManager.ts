import JournalService from "./JournalService";

export default class JournalManager {

    static totalTrades() {

        return JournalService
            .getAll()
            .length;

    }

    static buyTrades() {

        return JournalService
            .getAll()
            .filter(
                item => item.action === "BUY"
            );

    }

    static sellTrades() {

        return JournalService
            .getAll()
            .filter(
                item => item.action === "SELL"
            );

    }

    static holdTrades() {

        return JournalService
            .getAll()
            .filter(
                item => item.action === "HOLD"
            );

    }

}

