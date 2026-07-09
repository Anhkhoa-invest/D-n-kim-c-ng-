import type { Position } from "./Position";

export default class PositionRepository {

    private static items: Position[] = [];

    static getAll() {
        return this.items;
    }

    static add(item: Position) {
        this.items.push(item);
    }

    static remove(id: string) {
        this.items = this.items.filter(
            p => p.id !== id
        );
    }

    static find(id: string) {
        return this.items.find(
            p => p.id === id
        );
    }

    static update(position: Position) {

        this.items = this.items.map(
            p => p.id === position.id ? position : p
        );

    }

}

