import type { Thesis } from "./Thesis";

export default class ThesisRepository {

    private static items: Thesis[] = [];

    static getAll() {
        return this.items;
    }

    static add(item: Thesis) {
        this.items.push(item);
    }

    static remove(id: string) {
        this.items = this.items.filter(
            t => t.id !== id
        );
    }

    static find(id: string) {
        return this.items.find(
            t => t.id === id
        );
    }

    static update(item: Thesis) {

        this.items = this.items.map(
            t => t.id === item.id ? item : t
        );

    }

}
