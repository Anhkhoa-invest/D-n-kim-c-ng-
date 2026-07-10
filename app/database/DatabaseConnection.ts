import DatabaseConfig from "./DatabaseConfig";

export default class DatabaseConnection {

    private static connected = false;

    static connect() {
        this.connected = true;
        return DatabaseConfig.DATABASE;
    }

    static isConnected() {
        return this.connected;
    }

}
