import type { MarketData } from "@/app/models/MarketData";

export default class MarketBackup {
    private readonly backupKey = "market-backup";

    /**
     * Sao lưu dữ liệu
     */
    public save(data: MarketData[]): void {
        localStorage.setItem(
            this.backupKey,
            JSON.stringify(data)
        );
    }

    /**
     * Khôi phục dữ liệu
     */
    public restore(): MarketData[] {
        const backup = localStorage.getItem(this.backupKey);

        if (!backup) return [];

        return JSON.parse(backup);
    }

    /**
     * Xóa bản sao lưu
     */
    public clear(): void {
        localStorage.removeItem(this.backupKey);
    }

    /**
     * Kiểm tra có backup hay không
     */
    public hasBackup(): boolean {
        return localStorage.getItem(this.backupKey) !== null;
    }
}

