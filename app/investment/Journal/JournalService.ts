import type { Journal } from "./Journal";
import JournalRepository from "./JournalRepository";

export default class JournalService {

    static getAll() {
        return JournalRepository.getAll();
    }

    static add(item: Journal) {
        JournalRepository.add(item);
    }

    static remove(id: string) {
        JournalRepository.remove(id);
    }

    static find(id: string) {
        return JournalRepository.find(id);
    }

    static update(item: Journal) {
        JournalRepository.update(item);
    }

}
