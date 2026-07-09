import type { Ranking } from "./Ranking";

export default class RankingRepository {

    private static rankings: Ranking[] = [];

    static getAll() {
        return this.rankings;
    }

    static add(item: Ranking) {
        this.rankings.push(item);
    }

    static remove(id: string) {
        this.rankings = this.rankings.filter(
            r => r.id !== id
        );
    }

    static find(id: string) {
        return this.rankings.find(
            r => r.id === id
        );
    }

    static update(item: Ranking) {

        this.rankings = this.rankings.map(
            r => r.id === item.id ? item : r
        );

    }

}

