import PortfolioReturn from "./PortfolioReturn";

export default class PortfolioReturnEngine {

    static calculate(): PortfolioReturn {

        return {

            daily: 0,

            weekly: 0,

            monthly: 0,

            quarterly: 0,

            yearly: 0,

            ytd: 0,

            allTime: 0

        };

    }

}
