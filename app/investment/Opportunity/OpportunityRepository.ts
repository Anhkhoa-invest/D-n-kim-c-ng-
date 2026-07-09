import type { Opportunity } from "./Opportunity";

export default class OpportunityRepository {

    private static opportunities: Opportunity[] = [];

    static getAll() {
        return this.opportunities;
    }

    static add(item: Opportunity) {
        this.opportunities.push(item);
    }

    static remove(id: string) {
        this.opportunities =
            this.opportunities.filter(
                o => o.id !== id
            );
    }

    static find(id: string) {
        return this.opportunities.find(
            o => o.id === id
        );
    }

    static update(item: Opportunity) {

        this.opportunities =
            this.opportunities.map(
                o => o.id === item.id ? item : o
            );

    }

}
