import type { Ranking } from "./Ranking";
import RankingRepository from "./RankingRepository";

export default class RankingService {

    static getAll() {
        return RankingRepository.getAll();
    }

    static add(item: Ranking) {
        RankingRepository.add(item);
    }

    static remove(id: string) {
        RankingRepository.remove(id);
    }

    static find(id: string) {
        return RankingRepository.find(id);
    }

    static update(item: Ranking) {
        RankingRepository.update(item);
    }

}

