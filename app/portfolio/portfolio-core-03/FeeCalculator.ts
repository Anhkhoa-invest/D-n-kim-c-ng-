export default class FeeCalculator {

    static calculateTradingFee(
        value: number,
        feePercent: number = 0.15
    ): number {

        return value * feePercent / 100;

    }

}
