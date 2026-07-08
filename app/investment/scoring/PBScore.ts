export class PBScore {
    calculate(stock: any): number {
        const pb = stock?.pb ?? 999;

        if (pb <= 1) return 100;
        if (pb <= 1.5) return 90;
        if (pb <= 2) return 80;
        if (pb <= 3) return 60;
        if (pb <= 5) return 40;

        return 20;
    }
}

