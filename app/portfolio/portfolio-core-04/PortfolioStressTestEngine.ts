import PortfolioStressTest from "./PortfolioStressTest";

export default class PortfolioStressTestEngine {

    static calculate(): PortfolioStressTest {

        return {

            marketCrash: 0,

            interestRateShock: 0,

            inflationShock: 0,

            liquidityShock: 0,

            worstCase: 0

        };

    }

}
