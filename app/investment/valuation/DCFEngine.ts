export class DCFEngine {

    calculate(
        freeCashFlow: number,
        growth: number,
        discountRate: number
    ): number {

        return (
            freeCashFlow *
            (1 + growth) /
            discountRate
        );

    }

}

