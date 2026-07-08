export default class CloudSyncService {
    static async upload(data: unknown) {
        console.log("Uploading...", data);
        return true;
    }

    static async download() {
        console.log("Downloading...");
        return null;
    }

    static async sync(data: unknown) {
        await this.upload(data);
        return await this.download();
    }
}
