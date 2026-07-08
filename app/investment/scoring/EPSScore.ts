export class EPSScore {
    calculate(stock: any): number {
        const eps = stock?.eps ?? 0;

        if (eps >= 10000) return 100;
        if (eps >= 7000) return 90;
        if (eps >= 5000) return 80;
        if (eps >= 3000) return 70;
        if (eps >= 1000) return 60;
        if (eps > 0) return 40;

        return 0;
    }
}

