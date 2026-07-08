export class ROEScore {
    calculate(stock: any): number {
        const roe = stock?.roe ?? 0;

        if (roe >= 30) return 100;
        if (roe >= 25) return 90;
        if (roe >= 20) return 80;
        if (roe >= 15) return 70;
        if (roe >= 10) return 60;

        return 30;
    }
}

