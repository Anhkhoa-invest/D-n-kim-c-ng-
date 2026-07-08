import { TrendPrediction } from "./TrendPrediction";
import { PriceTarget } from "./PriceTarget";
import { GrowthForecast } from "./GrowthForecast";
import { ProbabilityEngine } from "./ProbabilityEngine";

export class PredictionEngine {

  calculate(stock: any) {

    const trend = new TrendPrediction().calculate(stock);
    const target = new PriceTarget().calculate(stock);
    const growth = new GrowthForecast().calculate(stock);
    const probability = new ProbabilityEngine().calculate(stock);

    return {
      trend,
      target,
      growth,
      probability,
    };
  }
}

