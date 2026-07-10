export default class DatabaseHealth {

    static check() {

        return {
            status: "healthy",
            database: "kimcuong",
            uptime: Date.now()
        };

    }

}