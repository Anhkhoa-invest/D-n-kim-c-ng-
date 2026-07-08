export class ROAScore {
    calculate(stock: any): number {
        const roa = stock?.roa ?? 0;

        if (roa >= 20) return 100;
        if (roa >= 15) return 90;
        if (roa >= 10) return 80;
        if (roa >= 7) return 70;
        if (roa >= 5) return 60;

        return 30;
    }
}
