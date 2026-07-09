import type { WatchRule } from "./WatchRule";
import WatchRepository from "./WatchRepository";

export default class WatchService {

    static getAll() {
        return WatchRepository.getAll();
    }

    static add(rule: WatchRule) {
        WatchRepository.add(rule);
    }

    static remove(id: string) {
        WatchRepository.remove(id);
    }

    static find(id: string) {
        return WatchRepository.find(id);
    }

    static update(rule: WatchRule) {
        WatchRepository.update(rule);
    }

}

