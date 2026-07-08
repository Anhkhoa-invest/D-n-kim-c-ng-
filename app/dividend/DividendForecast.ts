import DividendService from "./DividendService";

export default class DividendForecast {

    static totalExpected() {

        return DividendService
            .getAll()
            .reduce(
                (sum, d) =>
                    sum + d.totalDividend,
                0
            );

    }

}

