export default class MarketStatus {
    constructor(
        public isOpen: boolean = false,
        public isBreak: boolean = false,
        public isHoliday: boolean = false,
        public session: string = "CLOSED",
        public updatedAt: Date = new Date()
    ) {}

    public open(): void {
        this.isOpen = true;
        this.isBreak = false;
        this.session = "OPEN";
        this.updatedAt = new Date();
    }

    public close(): void {
        this.isOpen = false;
        this.session = "CLOSED";
        this.updatedAt = new Date();
    }

    public breakTime(): void {
        this.isBreak = true;
        this.session = "BREAK";
        this.updatedAt = new Date();
    }

    public clone(): MarketStatus {
        return new MarketStatus(
            this.isOpen,
            this.isBreak,
            this.isHoliday,
            this.session,
            new Date(this.updatedAt)
        );
    }

    public toJSON() {
        return {
            isOpen: this.isOpen,
            isBreak: this.isBreak,
            isHoliday: this.isHoliday,
            session: this.session,
            updatedAt: this.updatedAt,
        };
    }
}
