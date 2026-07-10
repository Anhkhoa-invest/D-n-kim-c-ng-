import DatabaseConnection from "./DatabaseConnection";

export default class DatabaseProvider {

    static boot() {

        return DatabaseConnection.connect();

    }

}
