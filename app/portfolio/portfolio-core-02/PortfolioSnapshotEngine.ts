import PortfolioSnapshot from "./PortfolioSnapshot";

export default class PortfolioSnapshotEngine {

    static create(): PortfolioSnapshot {

        return {

            id: crypto.randomUUID(),

            createdAt: new Date(),

            totalValue: 0,

            totalCost: 0,

            totalProfit: 0,

            totalProfitPercent: 0

        };

    }

}

