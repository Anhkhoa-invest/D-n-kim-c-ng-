export default interface PortfolioTransaction {

    id: string;

    symbol: string;

    side: "BUY" | "SELL";

    quantity: number;

    price: number;

    fee: number;

    tax: number;

    total: number;

    executedAt: Date;

}
