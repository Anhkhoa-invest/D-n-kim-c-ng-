export default class Ticker {
    constructor(
        public symbol: string,
        public name: string,
        public exchange: string,
        public industry: string = "",
        public sector: string = "",
        public currency: string = "VND",
        public active: boolean = true,
        public listedAt: Date = new Date()
    ) {}

    public isActive(): boolean {
        return this.active;
    }

    public displayName(): string {
        return `${this.symbol} - ${this.name}`;
    }

    public clone(): Ticker {
        return new Ticker(
            this.symbol,
            this.name,
            this.exchange,
            this.industry,
            this.sector,
            this.currency,
            this.active,
            new Date(this.listedAt)
        );
    }

    public toJSON() {
        return {
            symbol: this.symbol,
            name: this.name,
            exchange: this.exchange,
            industry: this.industry,
            sector: this.sector,
            currency: this.currency,
            active: this.active,
            listedAt: this.listedAt,
        };
    }
}
