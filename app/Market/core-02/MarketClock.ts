export default class MarketClock {
    public now(): Date {
        return new Date();
    }

    public isTradingTime(): boolean {
        return false;
    }

    public isMorningSession(): boolean {
        return false;
    }

    public isAfternoonSession(): boolean {
        return false;
    }

    public isWeekend(): boolean {
        const day = this.now().getDay();
        return day === 0 || day === 6;
    }
}
