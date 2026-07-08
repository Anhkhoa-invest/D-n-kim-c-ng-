export interface NotificationItem {
  id: number;
  title: string;
  message: string;
  type: "success" | "warning" | "danger" | "info";
  time: string;
}

export class NotificationService {
  static getNotifications(): NotificationItem[] {
    return [
      {
        id: 1,
        title: "AI Khuyến nghị",
        message: "MBB đạt AI Score 94 - Có thể tiếp tục nắm giữ.",
        type: "success",
        time: "2 phút trước",
      },
      {
        id: 2,
        title: "Danh mục",
        message: "Danh mục đang lãi 7.968đ.",
        type: "info",
        time: "5 phút trước",
      },
      {
        id: 3,
        title: "Cảnh báo",
        message: "HHV giảm dưới vùng hỗ trợ.",
        type: "warning",
        time: "10 phút trước",
      },
    ];
  }
}
