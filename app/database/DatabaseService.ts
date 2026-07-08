export default class DatabaseService {
    static async save(key: string, data: unknown) {
        console.log("Save:", key, data);
        return true;
    }

    static async load(key: string) {
        console.log("Load:", key);
        return null;
    }

    static async remove(key: string) {
        console.log("Remove:", key);
        return true;
    }
}
