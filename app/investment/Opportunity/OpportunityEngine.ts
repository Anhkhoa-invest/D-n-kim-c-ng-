import OpportunityService from "./OpportunityService";

export default class OpportunityEngine {

    static top(limit = 10) {

        return OpportunityService
            .getAll()
            .sort(
                (a, b) => b.score - a.score
            )
            .slice(0, limit);

    }

    static best() {

        return this.top(1)[0];

    }

}
