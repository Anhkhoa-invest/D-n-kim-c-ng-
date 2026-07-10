import type { PortfolioItem } from "@/app/models/PortfolioItem";

export default class PortfolioCache {

  private cache = new Map<string, PortfolioItem[]>();

  /**
   * Lưu Cache
   */
  public set(key: string, value: PortfolioItem[]): void {

    this.cache.set(key, value);

  }

  /**
   * Đọc Cache
   */
  public get(key: string): PortfolioItem[] | undefined {

    return this.cache.get(key);

  }

  /**
   * Kiểm tra Cache
   */
  public has(key: string): boolean {

    return this.cache.has(key);

  }

  /**
   * Xóa Cache
   */
  public remove(key: string): boolean {

    return this.cache.delete(key);

  }

  /**
   * Xóa toàn bộ Cache
   */
  public clear(): void {

    this.cache.clear();

  }

  /**
   * Danh sách Key
   */
  public keys(): string[] {

    return Array.from(this.cache.keys());

  }

  /**
   * Danh sách Value
   */
  public values(): PortfolioItem[][] {

    return Array.from(this.cache.values());

  }

  /**
   * Kích thước Cache
   */
  public size(): number {

    return this.cache.size;

  }

}

