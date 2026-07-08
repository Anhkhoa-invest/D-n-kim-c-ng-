import type { Transaction } from "./Transaction";

export default class TransactionService {

    private static transactions: Transaction[] = [];

    static getAll() {
        return this.transactions;
    }

    static add(transaction: Transaction) {
        this.transactions.push(transaction);
    }

    static remove(id: string) {
        this.transactions =
            this.transactions.filter(
                t => t.id !== id
            );
    }

}
