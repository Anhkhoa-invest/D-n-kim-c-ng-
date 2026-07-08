import { QualityFactor } from "./QualityFactor";
import { ValueFactor } from "./ValueFactor";
import { MomentumFactor } from "./MomentumFactor";
import { SizeFactor } from "./SizeFactor";

export class FactorEngine {

    calculate(stock: any) {

        const quality = new QualityFactor().calculate(stock);
        const value = new ValueFactor().calculate(stock);
        const momentum = new MomentumFactor().calculate(stock);
        const size = new SizeFactor().calculate(stock);

        return {
            quality,
            value,
            momentum,
            size,
        };

    }

}

