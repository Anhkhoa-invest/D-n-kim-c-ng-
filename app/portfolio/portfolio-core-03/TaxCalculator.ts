export default class TaxCalculator {

    static calculateSellTax(
        value: number,
        taxPercent: number = 0.1
    ): number {

        return value * taxPercent / 100;

    }

}

