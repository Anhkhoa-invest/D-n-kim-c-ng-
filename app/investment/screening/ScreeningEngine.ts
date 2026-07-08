import { FundamentalFilter } from "./FundamentalFilter";
import { TechnicalFilter } from "./TechnicalFilter";
import { DividendFilter } from "./DividendFilter";
import { GrowthFilter } from "./GrowthFilter";

export class ScreeningEngine {

    calculate(stock: any) {

        const fundamental = new FundamentalFilter().calculate(stock);
        const technical = new TechnicalFilter().calculate(stock);
        const dividend = new DividendFilter().calculate(stock);
        const growth = new GrowthFilter().calculate(stock);

        return {
            fundamental,
            technical,
            dividend,
            growth,
        };

    }

}
