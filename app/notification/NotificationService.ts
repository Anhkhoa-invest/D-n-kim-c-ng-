import { Notification } from "./Notification";

export default class NotificationService {
  private static items: Notification[] = [];

  static getAll() {
    return this.items;
  }

  static push(item: Notification) {
    this.items.unshift(item);
  }

  static markRead(id: string) {
    this.items = this.items.map(n =>
      n.id === id ? { ...n, read: true } : n
    );
  }
}

