import { InterestRate } from "./InterestRate";
import { Inflation } from "./Inflation";
import { ExchangeRate } from "./ExchangeRate";
import { GDPGrowth } from "./GDPGrowth";
import { MarketCycle } from "./MarketCycle";

export class MacroEngine {

    calculate(stock: any) {

        const interest = new InterestRate().calculate(stock);
        const inflation = new Inflation().calculate(stock);
        const exchange = new ExchangeRate().calculate(stock);
        const gdp = new GDPGrowth().calculate(stock);
        const cycle = new MarketCycle().calculate(stock);

        return {
            interest,
            inflation,
            exchange,
            gdp,
            cycle,
        };

    }

}

