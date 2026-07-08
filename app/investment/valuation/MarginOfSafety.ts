export class MarginOfSafety {
    calculate(
        currentPrice: number,
        intrinsicPrice: number
    ): number {

        if (intrinsicPrice <= 0) return 0;

        return (
            (intrinsicPrice - currentPrice) /
            intrinsicPrice
        ) * 100;
    }
}

