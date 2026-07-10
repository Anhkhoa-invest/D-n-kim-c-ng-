import DatabaseRepository from "./DatabaseRepository";

export default class DatabaseService {

    static save(table: string, data: Record<string, unknown>) {

        DatabaseRepository.save(table, data);

    }

    static all(table: string) {

        return DatabaseRepository.all(table);

    }

    static clear(table: string) {

        DatabaseRepository.clear(table);

    }

}
