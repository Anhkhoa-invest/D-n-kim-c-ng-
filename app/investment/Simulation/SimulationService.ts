import type { Simulation } from "./Simulation";
import SimulationRepository from "./SimulationRepository";

export default class SimulationService {

    static getAll() {
        return SimulationRepository.getAll();
    }

    static add(item: Simulation) {
        SimulationRepository.add(item);
    }

    static remove(id: string) {
        SimulationRepository.remove(id);
    }

    static find(id: string) {
        return SimulationRepository.find(id);
    }

    static update(item: Simulation) {
        SimulationRepository.update(item);
    }

}

