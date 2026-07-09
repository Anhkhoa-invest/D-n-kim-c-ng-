import type { Simulation } from "./Simulation";

export default class SimulationRepository {

    private static simulations: Simulation[] = [];

    static getAll() {
        return this.simulations;
    }

    static add(item: Simulation) {
        this.simulations.push(item);
    }

    static remove(id: string) {
        this.simulations = this.simulations.filter(
            s => s.id !== id
        );
    }

    static find(id: string) {
        return this.simulations.find(
            s => s.id === id
        );
    }

    static update(item: Simulation) {

        this.simulations = this.simulations.map(
            s => s.id === item.id ? item : s
        );

    }

}

