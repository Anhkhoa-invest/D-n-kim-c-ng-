import Exchange from "./Exchange";
import MarketItem from "./MarketItem";

export default class Market {
    constructor(
        public readonly exchange: Exchange,
        private items: MarketItem[] = []
    ) {}

    /**
     * Thêm mã vào thị trường
     */
    public add(item: MarketItem): void {
        this.items.push(item);
    }

    /**
     * Lấy toàn bộ danh sách
     */
    public getItems(): MarketItem[] {
        return [...this.items];
    }

    /**
     * Tìm theo mã
     */
    public find(symbol: string): MarketItem | undefined {
        return this.items.find(
            item => item.symbol === symbol
        );
    }

    /**
     * Tổng số mã
     */
    public count(): number {
        return this.items.length;
    }

    /**
     * Xóa toàn bộ
     */
    public clear(): void {
        this.items = [];
    }
}
