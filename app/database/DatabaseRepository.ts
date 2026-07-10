type DatabaseRecord = Record<string, unknown>;

export default class DatabaseRepository {

    private static tables: Record<string, DatabaseRecord[]> = {};

    static save(table: string, data: DatabaseRecord) {

        if (!this.tables[table]) {
            this.tables[table] = [];
        }

        this.tables[table].push(data);

    }

    static all(table: string) {

        return this.tables[table] ?? [];

    }

    static clear(table: string) {

        this.tables[table] = [];

    }

}

