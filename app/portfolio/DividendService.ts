export default class DividendService {

    static estimate(
        shares: number,
        dividendPerShare: number
    ) {
        return shares * dividendPerShare;
    }

    static yield(
        dividendPerShare: number,
        price: number
    ) {
        if (price === 0) return 0;

        return (dividendPerShare / price) * 100;
    }

}
