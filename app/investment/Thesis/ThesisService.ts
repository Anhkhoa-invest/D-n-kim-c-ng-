import type { Thesis } from "./Thesis";
import ThesisRepository from "./ThesisRepository";

export default class ThesisService {

    static getAll() {
        return ThesisRepository.getAll();
    }

    static add(item: Thesis) {
        ThesisRepository.add(item);
    }

    static remove(id: string) {
        ThesisRepository.remove(id);
    }

    static find(id: string) {
        return ThesisRepository.find(id);
    }

    static update(item: Thesis) {
        ThesisRepository.update(item);
    }

}
