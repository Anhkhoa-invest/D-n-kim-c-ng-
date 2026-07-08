export class FinancialScore {
    calculate(stock: any): number {
        const debt = stock?.debtRatio ?? 100;

        if (debt <= 20) return 100;
        if (debt <= 30) return 90;
        if (debt <= 40) return 80;
        if (debt <= 50) return 70;
        if (debt <= 60) return 60;

        return 30;
    }
}
