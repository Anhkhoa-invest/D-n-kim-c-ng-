import { DCFEngine } from "./DCFEngine";
import { GrahamFormula } from "./GrahamFormula";
import { MarginOfSafety } from "./MarginOfSafety";
import { InvestmentDecisionEngine } from "./InvestmentDecisionEngine";
export class ValuationEngine {

    calculate(stock: any) {

        const graham = new GrahamFormula().calculate(
            stock.eps,
            stock.growth
        );

        const dcf = new DCFEngine().calculate(
            stock.freeCashFlow,
            stock.growth,
            stock.discountRate
        );

        const intrinsic =
            (graham + dcf) / 2;

        const margin =
            new MarginOfSafety().calculate(
                stock.price,
                intrinsic
            );
const recommendation =
    new InvestmentDecisionEngine().evaluate(margin);

        return {
            graham,
            dcf,
            intrinsic,
            margin,
            recommendation,
        };
    }

}
