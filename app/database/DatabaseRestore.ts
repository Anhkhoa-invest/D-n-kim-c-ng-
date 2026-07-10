import DatabaseRepository from "./DatabaseRepository";

export default class DatabaseRestore {

    static restore(
        table: string,
        backup: string
    ) {

        const data = JSON.parse(backup);

        DatabaseRepository.clear(table);

        for (const item of data) {
            DatabaseRepository.save(table, item);
        }

    }

}
