export default class DatabaseMigration {

    static migrate() {

        return {
            version: "1.0",
            success: true,
            migratedAt: new Date()
        };

    }

}

