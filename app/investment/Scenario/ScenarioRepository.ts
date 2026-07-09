import type { Scenario } from "./Scenario";

export default class ScenarioRepository {

    private static scenarios: Scenario[] = [];

    static getAll() {
        return this.scenarios;
    }

    static add(item: Scenario) {
        this.scenarios.push(item);
    }

    static remove(id: string) {
        this.scenarios =
            this.scenarios.filter(
                s => s.id !== id
            );
    }

    static find(id: string) {
        return this.scenarios.find(
            s => s.id === id
        );
    }

    static update(item: Scenario) {

        this.scenarios =
            this.scenarios.map(
                s => s.id === item.id ? item : s
            );

    }

}

