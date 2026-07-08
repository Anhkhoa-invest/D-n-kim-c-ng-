import { PortfolioOptimizer } from "./PortfolioOptimizer";
import { WeightOptimizer } from "./WeightOptimizer";
import { RebalanceOptimizer } from "./RebalanceOptimizer";
import { TaxOptimizer } from "./TaxOptimizer";
import { CostOptimizer } from "./CostOptimizer";

export class OptimizerEngine {

    calculate(stock: any) {

        const portfolio = new PortfolioOptimizer().calculate(stock);
        const weight = new WeightOptimizer().calculate(stock);
        const rebalance = new RebalanceOptimizer().calculate(stock);
        const tax = new TaxOptimizer().calculate(stock);
        const cost = new CostOptimizer().calculate(stock);

        return {
            portfolio,
            weight,
            rebalance,
            tax,
            cost,
        };

    }

}
