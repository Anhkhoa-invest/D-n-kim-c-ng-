import type { Journal } from "./Journal";

export default class JournalRepository {

    private static journals: Journal[] = [];

    static getAll() {
        return this.journals;
    }

    static add(item: Journal) {
        this.journals.push(item);
    }

    static remove(id: string) {
        this.journals =
            this.journals.filter(
                j => j.id !== id
            );
    }

    static find(id: string) {
        return this.journals.find(
            j => j.id === id
        );
    }

    static update(item: Journal) {

        this.journals =
            this.journals.map(
                j => j.id === item.id ? item : j
            );

    }

}

