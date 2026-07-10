import PortfolioDashboard from "./PortfolioDashboard";

export default class PortfolioDashboardEngine {

    static build(): PortfolioDashboard {

        return {

            totalValue: 0,

            totalProfit: 0,

            totalProfitPercent: 0,

            healthScore: 0,

            recommendation: "",

            alerts: 0

        };

    }

}
