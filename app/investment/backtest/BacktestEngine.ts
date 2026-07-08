import { BacktestRunner } from "./BacktestRunner";
import { StrategyTester } from "./StrategyTester";
import { PerformanceAnalyzer } from "./PerformanceAnalyzer";
import { TradeHistory } from "./TradeHistory";
import { MetricsCalculator } from "./MetricsCalculator";

export class BacktestEngine {

    calculate(stock: any) {

        const runner = new BacktestRunner().calculate(stock);
        const strategy = new StrategyTester().calculate(stock);
        const performance = new PerformanceAnalyzer().calculate(stock);
        const history = new TradeHistory().calculate(stock);
        const metrics = new MetricsCalculator().calculate(stock);

        return {
            runner,
            strategy,
            performance,
            history,
            metrics,
        };

    }

}
