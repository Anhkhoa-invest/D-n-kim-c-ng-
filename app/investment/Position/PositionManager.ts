import PositionService from "./PositionService";

export default class PositionManager {

    static totalMarketValue() {

        return PositionService
            .getAll()
            .reduce(
                (sum, position) =>
                    sum + position.marketValue,
                0
            );

    }

    static totalProfitLoss() {

        return PositionService
            .getAll()
            .reduce(
                (sum, position) =>
                    sum + position.profitLoss,
                0
            );

    }

    static totalPositions() {

        return PositionService
            .getAll()
            .length;

    }

}

