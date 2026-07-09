import type { AllocationHistory } from "./AllocationHistory";
import AllocationHistoryRepository from "./AllocationHistoryRepository";

export default class AllocationHistoryService {

    static getAll() {
        return AllocationHistoryRepository.getAll();
    }

    static add(item: AllocationHistory) {
        AllocationHistoryRepository.add(item);
    }

    static remove(id: string) {
        AllocationHistoryRepository.remove(id);
    }

    static find(id: string) {
        return AllocationHistoryRepository.find(id);
    }

    static update(item: AllocationHistory) {
        AllocationHistoryRepository.update(item);
    }

}


