import type { PortfolioItem } from "@/app/models/PortfolioItem";

export default class PortfolioRegistry {

  private registry = new Map<string, PortfolioItem[]>();

  /**
   * Đăng ký Portfolio
   */
  public register(name: string, portfolio: PortfolioItem[]): void {

    this.registry.set(name, portfolio);

  }

  /**
   * Lấy Portfolio
   */
  public get(name: string): PortfolioItem[] | undefined {

    return this.registry.get(name);

  }

  /**
   * Kiểm tra tồn tại
   */
  public has(name: string): boolean {

    return this.registry.has(name);

  }

  /**
   * Xóa Portfolio
   */
  public unregister(name: string): boolean {

    return this.registry.delete(name);

  }

  /**
   * Danh sách Portfolio
   */
  public getAll(): [string, PortfolioItem[]][] {

    return Array.from(this.registry.entries());

  }

  /**
   * Danh sách tên
   */
  public getNames(): string[] {

    return Array.from(this.registry.keys());

  }

  /**
   * Tổng số Portfolio
   */
  public count(): number {

    return this.registry.size;

  }

  /**
   * Xóa Registry
   */
  public clear(): void {

    this.registry.clear();

  }

}
