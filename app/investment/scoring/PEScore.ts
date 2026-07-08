export class PEScore {
    calculate(stock: any): number {
        const pe = stock?.pe ?? 999;

        if (pe <= 8) return 100;
        if (pe <= 10) return 90;
        if (pe <= 15) return 80;
        if (pe <= 20) return 60;
        if (pe <= 30) return 40;

        return 20;
    }
}
