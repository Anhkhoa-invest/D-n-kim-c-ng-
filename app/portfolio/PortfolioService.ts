import type { Portfolio } from "./Portfolio";

export default class PortfolioService {
    private static portfolios: Portfolio[] = [];
    static getAll() {
        return this.portfolios;
    }
    static add(portfolio: Portfolio) {
        this.portfolios.push(portfolio);
    }
    static remove(id: string) {
        this.portfolios = this.portfolios.filter(
            p => p.id !== id
        );
    }

    static find(id: string) {
        return this.portfolios.find(
            p => p.id === id
        );
    }
}

