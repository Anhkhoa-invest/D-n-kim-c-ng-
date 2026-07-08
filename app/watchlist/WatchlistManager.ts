import WatchlistService from "./WatchlistService";

export default class WatchlistManager {

    static list() {
        return WatchlistService.getAll();
    }

}
