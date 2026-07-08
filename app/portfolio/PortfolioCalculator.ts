export default class PortfolioCalculator {

    static profit(cost: number, value: number) {
        return value - cost;
    }

    static profitPercent(cost: number, value: number) {
        if (cost === 0) return 0;

        return ((value - cost) / cost) * 100;
    }

}
