import type { Allocation } from "./Allocation";
import AllocationRepository from "./AllocationRepository";

export default class AllocationService {

    static getAll() {
        return AllocationRepository.getAll();
    }

    static add(item: Allocation) {
        AllocationRepository.add(item);
    }

    static remove(id: string) {
        AllocationRepository.remove(id);
    }

    static find(id: string) {
        return AllocationRepository.find(id);
    }

}

