import type { RebalanceRule } from "./RebalanceRule";

export default class RebalanceService {

    private static rules: RebalanceRule[] = [];

    static getAll() {
        return this.rules;
    }

    static add(rule: RebalanceRule) {
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

    static update(rule: RebalanceRule) {

        this.rules = this.rules.map(
            r => r.id === rule.id ? rule : r
        );

    }

}

