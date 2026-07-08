export class GrahamFormula {

    calculate(
        eps: number,
        growth: number
    ): number {

        return eps * (8.5 + 2 * growth);

    }

}