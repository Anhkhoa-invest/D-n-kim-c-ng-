import DatabaseRepository from "./DatabaseRepository";

export default class DatabaseBackup {

    static create(table: string) {

        const data = DatabaseRepository.all(table);

        return JSON.stringify(data);

    }

}

