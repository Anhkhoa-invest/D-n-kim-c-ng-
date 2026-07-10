import PortfolioAllocation from "./PortfolioAllocation";

export default class PortfolioAllocationEngine {

    static calculate(): PortfolioAllocation {

        return {

            cash: 0,

            stocks: 0,

            bonds: 0,

            etfs: 0,

            crypto: 0,

            other: 0

        };

    }

}
