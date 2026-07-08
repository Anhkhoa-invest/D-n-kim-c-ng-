export default class PortfolioPerformance {

    static daily(values: number[]) {
        if (values.length < 2) return 0;

        return values[values.length - 1] - values[values.length - 2];
    }

    static total(values: number[]) {
        if (values.length === 0) return 0;

        return values[values.length - 1] - values[0];
    }

}
