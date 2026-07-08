import { LongTermStrategy } from "./LongTermStrategy";
import { SwingStrategy } from "./SwingStrategy";
import { DividendStrategy } from "./DividendStrategy";
import { DCAEngine } from "./DCAEngine";

export class StrategyEngine {

    calculate(stock: any) {

        const longTerm = new LongTermStrategy().calculate(stock);
        const swing = new SwingStrategy().calculate(stock);
        const dividend = new DividendStrategy().calculate(stock);
        const dca = new DCAEngine().calculate(stock);

        return {
            longTerm,
            swing,
            dividend,
            dca,
        };

    }

}

