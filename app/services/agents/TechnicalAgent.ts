import BaseAgent from "./BaseAgent";

export default class TechnicalAgent extends BaseAgent {

    readonly name = "TechnicalAgent";

    async analyze(symbol: string) {

        // TODO:
        // RSI
        // MACD
        // EMA
        // SMA
        // Bollinger Bands
        // Volume
        // Trend

        return this.success(
            88,
            91,
            `Technical analysis completed for ${symbol}`,
            {
    rsi: 58.4,

    macd: "Bullish",

    ema20: 35200,

    ema50: 34600,

    volumeTrend: "Increasing",

    trend: "UPTREND",

    support: 34000,

    resistance: 36500,

    breakout: false,

    score: 88
}

        );

    }

}
