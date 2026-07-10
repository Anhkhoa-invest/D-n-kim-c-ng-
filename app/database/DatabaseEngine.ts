import DatabaseProvider from "./DatabaseProvider";
import DatabaseService from "./DatabaseService";

export default class DatabaseEngine {

    static boot() {

        DatabaseProvider.boot();

        return {

            database: DatabaseService

        };

    }

}
