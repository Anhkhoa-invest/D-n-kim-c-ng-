import { AIScore } from "../core/AIScore";

export class AIScoreCalculator {

    calculate(
        symbol: string,
        fundamental: number,
        technical: number,
        risk: number,
        sentiment: number
    ): AIScore {

        const total =
            Math.round(
                (
                    fundamental * 0.40 +
                    technical * 0.30 +
                    risk * 0.20 +
                    sentiment * 0.10
                ) * 100
            ) / 100;

        return {
            symbol,
            fundamental,
            technical,
            risk,
            sentiment,
            total,
            updatedAt: new Date(),
        };
    }

}
