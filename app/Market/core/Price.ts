import type { MarketData } from "@/app/models/MarketData";

export default class Price {
    constructor(
        public current: number = 0,
        public open: number = 0,
        public high: number = 0,
        public low: number = 0,
        public previousClose: number = 0,
        public volume: number = 0,
        public updatedAt: Date = new Date()
    ) {}

    public change(): number {
        return this.current - this.previousClose;
    }

    public percentChange(): number {
        if (this.previousClose === 0) return 0;
        return (this.change() / this.previousClose) * 100;
    }

    public update(data: Partial<MarketData>): void {
        this.current = data.price ?? this.current;
        this.open = data.open ?? this.open;
        this.high = data.high ?? this.high;
        this.low = data.low ?? this.low;
        this.previousClose = data.previousClose ?? this.previousClose;
        this.volume = data.volume ?? this.volume;
        this.updatedAt = new Date();
    }

    public clone(): Price {
        return new Price(
            this.current,
            this.open,
            this.high,
            this.low,
            this.previousClose,
            this.volume,
            new Date(this.updatedAt)
        );
    }

    public toJSON() {
        return {
            current: this.current,
            open: this.open,
            high: this.high,
            low: this.low,
            previousClose: this.previousClose,
            volume: this.volume,
            change: this.change(),
            percentChange: this.percentChange(),
            updatedAt: this.updatedAt,
        };
    }
}
