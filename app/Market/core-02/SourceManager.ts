export interface MarketSource {
  id: string;
  name: string;
  enabled: boolean;
}

export default class SourceManager {
  private readonly sources = new Map<string, MarketSource>();

  /**
   * Đăng ký nguồn dữ liệu
   */
  public register(source: MarketSource): void {
    this.sources.set(source.id, source);
  }

  /**
   * Lấy nguồn theo id
   */
  public get(id: string): MarketSource | undefined {
    return this.sources.get(id);
  }

  /**
   * Danh sách nguồn
   */
  public getAll(): MarketSource[] {
    return [...this.sources.values()];
  }

  /**
   * Xóa nguồn
   */
  public remove(id: string): void {
    this.sources.delete(id);
  }

  /**
   * Kiểm tra tồn tại
   */
  public has(id: string): boolean {
    return this.sources.has(id);
  }

  /**
   * Xóa toàn bộ
   */
  public clear(): void {
    this.sources.clear();
  }
}

