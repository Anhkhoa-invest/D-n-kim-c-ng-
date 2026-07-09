export interface Journal {

    id: string;

    symbol: string;

    action: "BUY" | "SELL" | "HOLD";

    quantity: number;

    price: number;

    reason: string;

    emotion: string;

    result: number;

    note: string;

    createdAt: Date;

}
