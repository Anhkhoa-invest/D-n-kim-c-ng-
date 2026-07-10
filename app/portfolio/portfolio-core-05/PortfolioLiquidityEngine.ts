import PortfolioLiquidity from "./PortfolioLiquidity";

export default class PortfolioLiquidityEngine {

    static calculate(): PortfolioLiquidity {

        return {

            availableCash: 0,

            frozenCash: 0,

            marginAvailable: 0,

            liquidityRatio: 0,

            emergencyReserve: 0

        };

    }

}
