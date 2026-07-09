import RankingService from "./RankingService";

export default class RankingEngine {

    static generate() {

        const rankings =
            RankingService
                .getAll()
                .sort(
                    (a, b) => b.score - a.score
                );

        return rankings.map(
            (item, index) => ({

                ...item,

                rank: index + 1

            })
        );

    }

}
