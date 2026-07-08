import DividendService from "./DividendService";

export default class DividendAnalyzer {

    static averageYield() {

        const dividends =
            DividendService.getAll();

        if (dividends.length === 0)
            return 0;

        return (
            dividends.reduce(
                (sum, d) =>
                    sum + d.amountPerShare,
                0
            ) / dividends.length
        );

    }

}

