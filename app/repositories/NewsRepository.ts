import type { NewsData } from "@/app/models/NewsData";

export default class NewsRepository {

  private readonly database: Record<string, NewsData[]> = {

    MBB: [
      {
        id: crypto.randomUUID(),
        code: "MBB",
        title: "MBB công bố kết quả kinh doanh tích cực",
        summary: "Lợi nhuận tăng trưởng tốt trong quý gần nhất.",
        source: "Kim Cương OS",
        publishedAt: "2026-07-10",
        sentiment: 90,
      },
    ],

    HHV: [
      {
        id: crypto.randomUUID(),
        code: "HHV",
        title: "HHV tiếp tục mở rộng dự án hạ tầng",
        summary: "Doanh nghiệp ghi nhận thêm các dự án mới.",
        source: "Kim Cương OS",
        publishedAt: "2026-07-10",
        sentiment: 82,
      },
    ],

  };

  /**
   * Lấy tin theo mã cổ phiếu
   */
  public get(code: string): NewsData[] {

    return this.database[code] ?? [];

  }

  /**
   * Lấy toàn bộ tin
   */
  public getAll(): NewsData[] {

    return Object.values(this.database).flat();

  }

  /**
   * Kiểm tra mã có tin tức
   */
  public exists(code: string): boolean {

    return code in this.database;

  }

}
