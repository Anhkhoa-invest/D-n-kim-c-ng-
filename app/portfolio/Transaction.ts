
export interface Transaction {
    id: string;

    symbol: string;

    type: "BUY" | "SELL";

    quantity: number;

    price: number;

    fee: number;

    tax: number;

    date: Date;

    note?: string;
}
