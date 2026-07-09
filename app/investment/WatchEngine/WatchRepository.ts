import type { WatchRule } from "./WatchRule";

export default class WatchRepository {

    private static rules: WatchRule[] = [];

    static getAll() {
        return this.rules;
    }

    static add(rule: WatchRule) {
        this.rules.push(rule);
    }

    static remove(id: string) {
        this.rules = this.rules.filter(
            r => r.id !== id
        );
    }

    static find(id: string) {
        return this.rules.find(
            r => r.id === id
        );
    }

    static update(rule: WatchRule) {

        this.rules = this.rules.map(
            r => r.id === rule.id ? rule : r
        );

    }

}

