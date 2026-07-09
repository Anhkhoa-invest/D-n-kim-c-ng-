import type { AllocationHistory } from "./AllocationHistory";

export default class AllocationHistoryRepository {

    private static histories: AllocationHistory[] = [];

    static getAll() {
        return this.histories;
    }

    static add(item: AllocationHistory) {
        this.histories.push(item);
    }

    static remove(id: string) {
        this.histories =
            this.histories.filter(
                h => h.id !== id
            );
    }

    static find(id: string) {
        return this.histories.find(
            h => h.id === id
        );
    }

    static update(item: AllocationHistory) {

        this.histories =
            this.histories.map(
                h => h.id === item.id ? item : h
            );

    }

}

