export default class Exchange {
    constructor(
        public readonly code: string,
        public readonly name: string,
        public readonly country: string,
        public readonly timezone: string
    ) {}

    /**
     * Kiểm tra mã sàn hợp lệ
     */
    public isValid(): boolean {
        return this.code.trim().length > 0;
    }

    /**
     * Kiểm tra có phải HOSE
     */
    public isHOSE(): boolean {
        return this.code === "HOSE";
    }

    /**
     * Kiểm tra có phải HNX
     */
    public isHNX(): boolean {
        return this.code === "HNX";
    }

    /**
     * Kiểm tra có phải UPCOM
     */
    public isUPCOM(): boolean {
        return this.code === "UPCOM";
    }

    /**
     * Hiển thị tên đầy đủ
     */
    public displayName(): string {
        return `${this.name} (${this.code})`;
    }
}
