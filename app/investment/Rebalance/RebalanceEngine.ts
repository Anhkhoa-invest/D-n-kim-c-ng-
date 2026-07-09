import PositionService from "../Position/PositionService";
import AllocationService from "../Allocation/AllocationService";
import RebalanceService from "./RebalanceService";

export default class RebalanceEngine {

    static run() {

        const positions = PositionService.getAll();

        const allocations = AllocationService.getAll();

        const rules = RebalanceService.getAll();

        return positions.map(position => {

            const allocation = allocations.find(
                a => a.symbol === position.symbol
            );

            const rule = rules.find(
                r => r.symbol === position.symbol
            );

            return {

                symbol: position.symbol,

                currentWeight:
                    allocation?.currentWeight ?? 0,

                targetWeight:
                    allocation?.targetWeight ?? 0,

                tolerance:
                    rule?.tolerance ?? 0,

                needRebalance:

                    Math.abs(
                        (allocation?.currentWeight ?? 0)
                        -
                        (allocation?.targetWeight ?? 0)
                    )

                    >

                    (rule?.tolerance ?? 0)

            };

        });

    }

}

