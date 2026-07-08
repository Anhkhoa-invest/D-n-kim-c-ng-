import DividendService from "./DividendService";

export default class DividendCalendar {

    static upcoming() {

        return DividendService
            .getAll()
            .sort(
                (a, b) =>
                    a.exDate.getTime() -
                    b.exDate.getTime()
            );

    }

}
