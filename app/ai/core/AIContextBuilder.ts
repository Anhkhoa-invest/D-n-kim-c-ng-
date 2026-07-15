import { AIContext } from "./AIContext";

export class AIContextBuilder {
static create(symbol: string): AIContext {
    return {
        // Thông tin
        symbol,
        companyName: "",
        exchange: "",
        sector: "",
        industry: "",

        // Giá
        currentPrice: 0,
        previousClose: 0,
        open: 0,
        high: 0,
        low: 0,
        volume: 0,

        // Tài chính
        pe: 0,
        pb: 0,
        eps: 0,
        roe: 0,
        roa: 0,
        debtToEquity: 0,
        operatingMargin: 0,

        // Tăng trưởng
        revenueGrowth: 0,
        profitGrowth: 0,

        // Cổ tức
        dividendYield: 0,

        // Tin tức
        newsScore: 0,
        sentimentScore: 0,

        // Danh mục
        holdingQuantity: 0,
        averagePrice: 0,

        // Mở rộng
        metadata: {},
    };
}



}

