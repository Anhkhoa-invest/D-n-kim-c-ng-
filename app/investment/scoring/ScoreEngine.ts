import { EPSScore } from "./EPSScore";
import { PEScore } from "./PEScore";
import { PBScore } from "./PBScore";
import { ROEScore } from "./ROEScore";
import { ROAScore } from "./ROAScore";
import { FinancialScore } from "./FinancialScore";
import { InvestmentRank } from "./InvestmentRank";
import { RecommendationEngine } from "./RecommendationEngine";

export class ScoreEngine {
    calculate(stock: any) {
        const eps = new EPSScore().calculate(stock);
        const pe = new PEScore().calculate(stock);
        const pb = new PBScore().calculate(stock);
        const roe = new ROEScore().calculate(stock);
        const roa = new ROAScore().calculate(stock);
        const financial = new FinancialScore().calculate(stock);

        const total =
            (eps + pe + pb + roe + roa + financial) / 6;
const rank = new InvestmentRank().calculate(total);
const recommendation = new RecommendationEngine().evaluate(total);

        return {
            eps,
            pe,
            pb,
            roe,
            roa,
            financial,
            total,
            rank,
            recommendation,
        };
    }
}
