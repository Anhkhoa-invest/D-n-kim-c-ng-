import { BuyOrder } from "./BuyOrder";
import { SellOrder } from "./SellOrder";
import { OrderValidator } from "./OrderValidator";
import { ExecutionReport } from "./ExecutionReport";

export class OrderEngine {

    calculate(stock: any) {

        const buy = new BuyOrder().calculate(stock);
        const sell = new SellOrder().calculate(stock);
        const validator = new OrderValidator().calculate(stock);
        const report = new ExecutionReport().calculate(stock);

        return {
            buy,
            sell,
            validator,
            report,
        };

    }

}

