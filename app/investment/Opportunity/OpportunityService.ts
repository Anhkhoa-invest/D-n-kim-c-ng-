import type { Opportunity } from "./Opportunity";
import OpportunityRepository from "./OpportunityRepository";

export default class OpportunityService {

    static getAll() {
        return OpportunityRepository.getAll();
    }

    static add(item: Opportunity) {
        OpportunityRepository.add(item);
    }

    static remove(id: string) {
        OpportunityRepository.remove(id);
    }

    static find(id: string) {
        return OpportunityRepository.find(id);
    }

    static update(item: Opportunity) {
        OpportunityRepository.update(item);
    }

}

