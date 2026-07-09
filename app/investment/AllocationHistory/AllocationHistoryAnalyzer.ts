import AllocationHistoryService from "./AllocationHistoryService";

export default class AllocationHistoryAnalyzer {

    static latest(limit = 10) {

        return AllocationHistoryService
            .getAll()
            .sort(
                (a, b) =>
                    b.createdAt.getTime()
                    -
                    a.createdAt.getTime()
            )
            .slice(0, limit);

    }

    static bySymbol(symbol: string) {

        return AllocationHistoryService
            .getAll()
            .filter(
                item => item.symbol === symbol
            );

    }

}
