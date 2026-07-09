import type { Scenario } from "./Scenario";
import ScenarioRepository from "./ScenarioRepository";

export default class ScenarioService {

    static getAll() {
        return ScenarioRepository.getAll();
    }

    static add(item: Scenario) {
        ScenarioRepository.add(item);
    }

    static remove(id: string) {
        ScenarioRepository.remove(id);
    }

    static find(id: string) {
        return ScenarioRepository.find(id);
    }

    static update(item: Scenario) {
        ScenarioRepository.update(item);
    }

}

