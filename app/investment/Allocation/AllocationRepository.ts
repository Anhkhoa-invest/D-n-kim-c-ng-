import type { Allocation } from "./Allocation";

export default class AllocationRepository {

    private static items: Allocation[] = [];

    static getAll() {
        return this.items;
    }

    static add(item: Allocation) {
        this.items.push(item);
    }

    static remove(id: string) {
        this.items = this.items.filter(
            i => i.id !== id
        );
    }

    static find(id: string) {
        return this.items.find(
            i => i.id === id
        );
    }

}
