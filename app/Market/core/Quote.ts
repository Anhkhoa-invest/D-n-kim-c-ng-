import type { MarketData } from "@/app/models/MarketData";

export default class Quote {
    constructor(
        public bid: number = 0,
        public ask: number = 0,
        public bidVolume: number = 0,
        public askVolume: number = 0,
        public lastPrice: number = 0,
        public lastVolume: number = 0,
        public updatedAt: Date = new Date()
    ) {}

    public update(data: Partial<MarketData>): void {
        this.lastPrice = data.price ?? this.lastPrice;
        this.lastVolume = data.volume ?? this.lastVolume;
        this.updatedAt = new Date();
    }

    public spread(): number {
        return this.ask - this.bid;
    }

    public midPrice(): number {
        return (this.bid + this.ask) / 2;
    }

    public clone(): Quote {
        return new Quote(
            this.bid,
            this.ask,
            this.bidVolume,
            this.askVolume,
            this.lastPrice,
            this.lastVolume,
            new Date(this.updatedAt)
        );
    }

    public toJSON() {
        return {
            bid: this.bid,
            ask: this.ask,
            bidVolume: this.bidVolume,
            askVolume: this.askVolume,
            lastPrice: this.lastPrice,
            lastVolume: this.lastVolume,
            spread: this.spread(),
            midPrice: this.midPrice(),
            updatedAt: this.updatedAt,
        };
    }
}
