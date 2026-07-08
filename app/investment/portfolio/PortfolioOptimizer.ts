import { CapitalAllocator } from "./CapitalAllocator";
import { DiversificationEngine } from "./DiversificationEngine";
import { KellyCriterion } from "./KellyCriterion";
import { PortfolioAllocation } from "./PortfolioAllocation";
import { RebalanceEngine } from "./RebalanceEngine";
import { RiskAllocator } from "./RiskAllocator";

export class PortfolioOptimizer {

    calculate(stock: any) {

        const capital = new CapitalAllocator().calculate(stock);
        const diversification = new DiversificationEngine().calculate(stock);
        const kelly = new KellyCriterion().calculate(stock);
        const allocation = new PortfolioAllocation().calculate(stock);
        const rebalance = new RebalanceEngine().calculate(stock);
        const risk = new RiskAllocator().calculate(stock);

        return {
            capital,
            diversification,
            kelly,
            allocation,
            rebalance,
            risk,
        };

    }

}
