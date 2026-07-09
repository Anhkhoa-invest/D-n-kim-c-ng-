import AllocationService from "./AllocationService";

export default class AllocationEngine {

    static totalWeight() {

        return AllocationService
            .getAll()
            .reduce(
                (sum, item) => sum + item.currentWeight,
                0
            );

    }

}

