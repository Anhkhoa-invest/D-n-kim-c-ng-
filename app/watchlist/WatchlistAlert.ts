export default class WatchlistAlert {

    static check(
        current: number,
        target: number
    ) {
        return current >= target;
    }

}