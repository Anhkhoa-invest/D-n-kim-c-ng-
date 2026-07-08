import { BetaScore } from "./BetaScore";
import { VolatilityScore } from "./VolatilityScore";
import { DrawdownScore } from "./DrawdownScore";
import { LiquidityRisk } from "./LiquidityRisk";
import { ConcentrationRisk } from "./ConcentrationRisk";
import { RiskScore } from "./RiskScore";
import { RiskLevel } from "./RiskLevel";

export class RiskEngine {
  calculate(stock: any) {

    const beta = new BetaScore().calculate(stock);
    const volatility = new VolatilityScore().calculate(stock);
    const drawdown = new DrawdownScore().calculate(stock);
    const liquidity = new LiquidityRisk().calculate(stock);
    const concentration = new ConcentrationRisk().calculate(stock);

    const score =
      (beta +
       volatility +
       drawdown +
       liquidity +
       concentration) / 5;

    const level = new RiskLevel().calculate(stock);

    return {
      beta,
      volatility,
      drawdown,
      liquidity,
      concentration,
      score,
      level,
    };
  }
}
