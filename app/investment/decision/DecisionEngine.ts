import { BuySignal } from "./BuySignal";
import { SellSignal } from "./SellSignal";
import { HoldSignal } from "./HoldSignal";
import { ConfidenceScore } from "./ConfidenceScore";

export class DecisionEngine {

  calculate(stock: any) {

    const buy = new BuySignal().calculate(stock);
    const sell = new SellSignal().calculate(stock);
    const hold = new HoldSignal().calculate(stock);
    const confidence = new ConfidenceScore().calculate(stock);

    return {
      buy,
      sell,
      hold,
      confidence,
    };
  }

}

