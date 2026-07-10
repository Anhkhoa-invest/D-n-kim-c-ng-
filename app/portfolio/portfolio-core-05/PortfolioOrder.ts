export default interface PortfolioOrder {

    id: string;

    symbol: string;

    side: "BUY" | "SELL";

    quantity: number;

    price: number;

    status: "PENDING" | "FILLED" | "CANCELLED";

    createdAt: Date;

}

